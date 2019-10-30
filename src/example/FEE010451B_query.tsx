/*
    Author: andrew
    Date: 2019/07/18
    Usage: Render FEE010451B Query Page
*/

// react
import * as React from 'react';

// shared component
import FeeTaskbar from '../components/FeeTaskbar';
import FeeRadioGroup from "../components/FeeRadioGroup";
import FeeInput from "../components/FeeInput";
import {FeeStyledForm, FormRow, StyledFormCell} from '../components/form/FeeStyledForm';
import FeeDatePicker from "../components/DatePicker/FeeDatePicker";
import FilterableComboBox from "../components/FilterableComboBox";
import WrapperForm from "../components/form/WrapperForm";

// kendo component
import {GridColumn} from "@progress/kendo-react-grid";

// property
import feeProperty from '../components/property/feeProperty';
import feeOptions from "../components/property/options";

// other

// logic component
import * as FEE010451B_helper from "./FEE010451B_helper";
import {CommonFormData, FormBodyProps, FormFuncs} from "../components/form/FormBody";
import {FormBodyInfo} from '../components/form/WrapperForm.d';

interface QueryFormBodyProps extends FormBodyProps {

    /**
     * 下拉選單資料 : 費率代碼
     */
    othersRateData: object[],

}

interface QueryFormProps {

    /**
     * WrapperQueryForm 定位
     */
    onRef: any, // React.RefObject<WrapperQueryForm>;


    /**
     * 下拉選單資料 : 費率代碼
     */
    othersRateData: object[],
}


interface CustomFormBodyInfo extends FormBodyInfo {

    props: { defaultData: object, formRef: HTMLFormElement }
}


class QueryFormBody extends React.Component<QueryFormBodyProps> {

    render() {

        const {formRef, othersRateData} = this.props;
        const {handleChange, getFormErrMsg} = this.props.formFuncs;
        const {queryInfo, warnMessages, errMessages, validateMessages} = this.props.formData;
        const messages = {warnMessages, errMessages, validateMessages};

        return (
            <FeeStyledForm
                onRef={formRef}
                fieldMapper={FEE010451B_helper.fieldMapper}
                alertMessage={getFormErrMsg()}
            >

                <FormRow>
                    <StyledFormCell
                        widthWeight={{md: 4}}
                        cellStatus={feeProperty.cellStatus.required}
                        title='貨棧別'
                    >
                        <FeeRadioGroup
                            defaultValue={'C'}
                            onChange={handleChange('cargoLocationObj')}
                            data={[
                                {show: '台北', code: 'C'},
                                {show: '高雄', code: 'K'}
                            ]}
                        />
                    </StyledFormCell>
                    <StyledFormCell
                        widthWeight={{md: 4}}
                        cellStatus={feeProperty.cellStatus.editable}
                        title='生效日期'
                    >
                        <FeeDatePicker
                            defaultValue={new Date()}
                            onChange={handleChange('effectDate')}
                        />
                    </StyledFormCell>
                </FormRow>

                <FormRow>
                    <StyledFormCell
                        widthWeight={{md: 4}}
                        cellStatus={feeProperty.cellStatus.editable}
                        title='客戶類別'
                    >
                        <FilterableComboBox
                            data={feeOptions.customerType02Options}
                            defaultValue={{code: '0', show: '全部'}}
                            onChange={handleChange('custTypeObj')}
                        />
                    </StyledFormCell>
                    <StyledFormCell
                        widthWeight={{md: 8}}
                        cellStatus={feeProperty.cellStatus.editable}
                        title='客戶編號'
                    >
                        <FeeInput
                            onChange={handleChange('custId')}
                        />
                    </StyledFormCell>
                </FormRow>

            </FeeStyledForm>
        )
    }

}

class QueryForm extends React.Component<QueryFormProps> {

    defaultData = {
        cargoLocation: 'C',
    };

    renderFormBody = ({props, formFuncs, formData}: CustomFormBodyInfo) => {

        return formFuncs && <QueryFormBody {...props} {...this.props} formFuncs={formFuncs} formData={formData}/>
    };

    render() {

        return (
            <WrapperForm
                ref={this.props.onRef}
                getFormBody={this.renderFormBody}
                defaultData={this.defaultData}
                getNewData={FEE010451B_helper.getNewData}
            />
        )
    }

}

class FEE010451BQuery extends React.Component {

    queryFormRef?: HTMLFormElement;

    handleSearchClick = () => this.queryFormRef && this.queryFormRef.formValidate() && console.log('form validate success !!!');

    render() {

        return (
            <>
                <FeeTaskbar
                    buttons={[
                        {
                            name: '查詢',
                            onClick: this.handleSearchClick,
                        },
                    ]}
                />
                <QueryForm

                    othersRateData={[
                        {
                            chargeType: 'A01', // 費率代碼
                            chargeDesc: '一般'  // 費率名稱
                        }
                    ]}

                    onRef={(queryFormRef: HTMLFormElement) => this.queryFormRef = queryFormRef}/>
            </>
        );
    }
}

export default FEE010451BQuery;
