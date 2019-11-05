import React from "react";
import DeleteConfirm from "./DeleteConfirm";

class FeeDeleteConfirm extends React.PureComponent {

    render() {

        const {open, handleOpenChange, handleConfirmClick, ...restProps} = this.props;

        if (open) {

            return (
                <DeleteConfirm
                    {...restProps}
                    handleOpenChange={handleOpenChange}
                    handleConfirmClick={handleConfirmClick}
                />
            );

        } else return '';
    }

}

export default FeeDeleteConfirm;
