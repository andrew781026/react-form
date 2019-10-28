// react
import React from "react";
import {withStyles, Tooltip, Typography, Grid} from "@material-ui/core";

// assets
import warningPng from 'view/FEE/common/assets/img/warning.png';

const styles = () => ({

    /* 箭頭上 */
    arrow_t_int: {
        width: 0,
        height: 0,
        borderWidth: '15px',
        borderStyle: 'solid',
        borderColor: 'transparent transparent #333 transparent',
        position: 'absolute',
        top: '-30px',
        left: '40px',
    },

    /* 箭頭上-邊框 */
    arrow_t_out: {
        width: 0,
        height: 0,
        borderWidth: '15px',
        borderStyle: 'solid',
        borderColor: 'transparent transparent #fff transparent',
        position: 'absolute',
        top: '-29px',
        left: '40px',
    },

    warningPng: {
        width: '32px',
        marginRight: '10px'
    }

});

const StyledTooltip = withStyles({
    tooltip: {
        position: 'relative',
        background: '#fff',
        border: 'solid 1px #333',
        top:'-10px', // 將 tooltip 向上方移動 , 貼其輸入框
        padding: '10px',
        fontSize: '14px',
        color: 'black',
    },
})(Tooltip);

// 箭頭參考資料 : https://www.minwt.com/webdesign-dev/css/8996.html
class FeeErrMsgTooltip extends React.Component {

    render() {

        const {classes, ...restProps} = this.props;

        return (
            <StyledTooltip
                {...restProps}
                title={
                    <React.Fragment>
                        <Grid container alignItems='center' justify='center'>
                            <Grid item>
                                <Grid container justify="center" alignItems='center'>
                                    <img src={warningPng}
                                         alt='warningPng'
                                         className={this.props.classes.warningPng}
                                    />
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Typography style={{alignContent: 'center',}}>{this.props.title}</Typography>
                            </Grid>
                        </Grid>
                        <span className={this.props.classes.arrow_t_int}/>
                        <span className={this.props.classes.arrow_t_out}/>
                    </React.Fragment>
                }
            />
        );
    }
}

export default withStyles(styles)(FeeErrMsgTooltip);
