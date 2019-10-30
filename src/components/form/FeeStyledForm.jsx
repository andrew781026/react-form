/*
    Author: andrew
    Date: 2019/06/17
    Usage: FeeStyledForm
*/

// react
import * as React from 'react';

// shared component
import {StyledGrid, StyledGridBorder, StyledTitleGridBorder} from "./StyledGrid";
import {Title} from "./Title";
import FormAlertBlock from "../alert/FormAlertBlock";

// material component
import {withStyles} from '@material-ui/core/styles';

const cellStyles = () => ({
    high_100: {height: '100%'},
    width_100: {width: '100%'},
    from_title: {width: '100px'},
    from_value: {width: 'calc(100% - 100px)'},
    bgColorYellow: {backgroundColor: '#ffff02'},
    bgColorBlue: {backgroundColor: '#02ffff'},
    input_title: {
        paddingTop: '10px',
        paddingBottom: '5px',
        paddingRight: '3px',
    },
    input_value: {
        padding: '6px 5px',
    }
});

const formStyles = () => ({
    paddingBottom: {paddingBottom: '24px'}
});

class FormCell extends React.Component {

    /*
    static propTypes = {
        widthWeight: PropTypes.object,
        cellStatus: PropTypes.string,
        cellValueBgColor: PropTypes.string | undefined,
        errMessage: PropTypes.string | undefined,
        validateMessage: PropTypes.string | undefined,
        warnMessage: PropTypes.string | undefined,
    };
     */

    static defaultProps = {
        showCellErrMsg: false,
        widthWeight: {
            xs: 12,
            sm: 6,
            md: 2,
            lg: undefined
        }
    };

    getCellTitleBgColor = () => {

        const {cellStatus} = this.props;

        const cellTitleBgColorMap = {
            view: undefined,
            required: '#ffff02',
            edit: '#02ffff',
        };

        return cellTitleBgColorMap[cellStatus] || '';
    };

    getCellValueBgColor = () => this.props.cellValueBgColor;

    renderWarnMsg = (warnMessage) => {

        return warnMessage && (
            <div style={{color: '#fdb900'}}>
                {warnMessage}
            </div>
        );
    };

    renderErrMsg = (errMessage) => {

        return errMessage && (
            <div style={{color: 'red'}}>
                {errMessage}
            </div>
        );
    };

    renderNoTitleCell = () => {

        const {classes, errMessage, warnMessage, showCellErrMsg} = this.props;

        return (
            <StyledGrid item {...this.props.widthWeight} className={classes.width_100}>
                <StyledGrid container className={classes.high_100}>
                    <StyledGridBorder item xs={12} style={{backgroundColor: this.getCellValueBgColor()}}>
                        {this.props.children}
                        {showCellErrMsg && (this.renderErrMsg(errMessage) || this.renderWarnMsg(warnMessage))}
                    </StyledGridBorder>
                </StyledGrid>
            </StyledGrid>
        );
    };

    renderHasTitleCell = () => {

        const {classes, errMessage, validateMessage, warnMessage, showCellErrMsg} = this.props;

        // 參考資料 : https://stackoverflow.com/questions/46066675/how-to-add-multiple-classes-in-material-ui-using-the-classes-props
        //   className={`${this.props.classes.from_title} ${this.getCellTitleBgColor()}`}

        return (
            <StyledGrid item {...this.props.widthWeight} className={classes.width_100}>
                <StyledGrid container className={classes.high_100}>
                    <StyledTitleGridBorder
                        item
                        className={this.props.classes.from_title}
                        style={{backgroundColor: this.getCellTitleBgColor()}}
                    >
                        <div className={this.props.classes.input_title}>{this.props.title}</div>
                    </StyledTitleGridBorder>
                    <StyledGridBorder
                        item
                        className={classes.from_value}
                        style={{backgroundColor: this.getCellValueBgColor()}}
                    >
                        <div className={this.props.classes.input_value}>
                            {this.props.children}
                            {showCellErrMsg && (this.renderErrMsg(errMessage) || this.renderWarnMsg(warnMessage))}
                        </div>
                    </StyledGridBorder>
                </StyledGrid>
            </StyledGrid>
        );
    };

    render() {
        return (this.props.title) ? this.renderHasTitleCell() : this.renderNoTitleCell();
    }
}

const StyledFormCell = withStyles(cellStyles)(FormCell);

const FormRow = (props) => (<StyledGrid container>{props.children}</StyledGrid>);

const FeeForm = props => (
    <form ref={props.onRef}>
        {props.title && <Title title={props.title}/>}
        <FormAlertBlock alertOpen={props.alertOpen} alertMessage={props.alertMessage} fieldMapper={props.fieldMapper}/>
        <div className={props.classes.paddingBottom}>{props.children}</div>
    </form>
);

const FeeStyledForm = withStyles(formStyles)(FeeForm);

export {StyledFormCell, FormRow, FeeStyledForm};
