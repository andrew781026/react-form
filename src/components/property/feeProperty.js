const cellStatus = {
    required: 'required',
    editable: 'edit',
    disable: 'disable'
};

const componentId = {
    FEE0109Q: {
        detail_form: '[FEE0109Q]detail-form',
        detail_sub_form01: '[FEE0109Q]detail-sub-form01',
        detail_sub_form04: '[FEE0109Q]detail-sub-form04',
        detail_sub_list01: '[FEE0109Q]detail-sub-list01',
        detail_sub_list02: '[FEE0109Q]detail-sub-list02',
        detail_sub_list03: '[FEE0109Q]detail-sub-list03',
        detail_sub_list04: '[FEE0109Q]detail-sub-list04',
        main_list: '[FEE0109Q]main-list',
        query_form: '[FEE0109Q]query-form',
    },
    FEE0401M: {
        main_list: '[FEE0401M]main-list',
        detail_sub_list: '[FEE0401M]detail-sub-list',
        query_form: '[FEE0401M]query-form',
        create_form: '[FEE0401M]create-form',
        copy_form: '[FEE0401M]copy-form',
        detail_form: '[FEE0401M]detail-form',
        edit_form: '[FEE0401M]edit-form',
        edit_form01: '[FEE0401M]edit-form01',
        edit_form02: '[FEE0401M]edit-form02',
    },
    FEE0402M: {
        main_list: '[FEE0402M]main-list',
        query_form: '[FEE0402M]query-form',
        create_form: '[FEE0402M]create-form',
        detail_form: '[FEE0402M]detail-form',
        edit_form: '[FEE0402M]edit-form',
    },
    FEE0459M: {
        main_list: '[FEE0459M]main-list',
        query_form: '[FEE0459M]query-form',
        create_form: '[FEE0459M]create-form',
        detail_form: '[FEE0459M]detail-form',
        edit_form: '[FEE0459M]edit-form',
        sub_create_form: '[FEE0459M]sub-create-form',
        sub_detail_form: '[FEE0459M]sub-detail-form',
        sub_edit_form: '[FEE0459M]sub-edit-form',
    },
    FEE0750B: {
        main_list: '[FEE0750B]main-list',
        query_form: '[FEE0750B]query-form',
    },
    FEE0804M: {
        main_list: '[FEE0804M]main-list',
        query_form: '[FEE0804M]query-form',
        create_form: '[FEE0804M]create-form',
        detail_form: '[FEE0804M]detail-form',
        edit_form: '[FEE0804M]edit-form',
    },
    FEE010403M: {
        main_list: '[FEE010403M]main-list',
        query_form: '[FEE010403M]query-form',
        create_form: '[FEE010403M]create-form',
        edit_form: '[FEE010403M]edit-form',
        detail_form: '[FEE010403M]detail-form',
    },
    FEE010404M: {
        main_list: '[FEE010404M]main-list',
        query_form: '[FEE010404M]query-form',
        create_form: '[FEE010404M]create-form',
    },
    FEE010406M: {
        main_list: '[FEE010406M]main-list',
        query_form: '[FEE010406M]query-form',
        create_form: '[FEE010406M]create-form',
        edit_form: '[FEE010406M]edit-form',
        detail_form: '[FEE010406M]detail-form',
    },
    FEE010407M: {
        main_list: '[FEE010407M]main-list',
        query_form: '[FEE010407M]query-form',
        create_form: '[FEE010407M]create-form',
        edit_form: '[FEE010407M]edit-form',
        detail_form: '[FEE010407M]detail-form',
    },
    FEE010444M: {
        main_list: '[FEE010444M]main-list',
        query_form: '[FEE010444M]query-form',
        create_form: '[FEE010444M]create-form',
        edit_form: '[FEE010444M]edit-form',
        detail_form: '[FEE010444M]detail-form',
    },
    FEE010451B: {
        main_list: '[FEE010451B]main-list',
        query_form: '[FEE010451B]query-form',
        create_form: '[FEE010451B]create-form',
        edit_form: '[FEE010451B]edit-form',
        detail_form: '[FEE010451B]detail-form',
    },
    FEE010456Q: {
        main_list: '[FEE010456Q]main-list',
        query_form: '[FEE010456Q]query-form',
        detail_form: '[FEE010456Q]detail-form',
    },
    FEE010460M: {
        main_list: '[FEE010460M]main-list',
        query_form: '[FEE010460M]query-form',
        create_form: '[FEE010460M]create-form',
        edit_form: '[FEE010460M]edit-form',
        detail_form: '[FEE010460M]detail-form',
    },
    FEE010802M: {
        main_list: '[FEE010802M]main-list',
        detail_sub_list: '[FEE010802M]detail-sub-list',
        query_form: '[FEE010802M]query-form',
        detail_form: '[FEE010802M]detail-form',
    },
    FEE030736Q: {
        main_list_1: '[FEE030736Q]main-list-1',
        main_list_2: '[FEE030736Q]main-list-2',
        query_form: '[FEE030736Q]query-form',
    },
    FEE030737Q: {
        main_list_1: '[FEE030737Q]main-list-1',
        main_list_2: '[FEE030737Q]main-list-2',
        query_form: '[FEE030737Q]query-form',
    },
    FEE040420M: {
        main_list: '[FEE040420M]main-list',
        query_form: '[FEE040420M]query-form',
        create_form: '[FEE040420M]create-form',
        edit_form: '[FEE040420M]edit-form',
        detail_form: '[FEE040420M]detail-form',
    },
    FEE080302Q: {
        main_list: '[FEE080302Q]main-list',
        query_form: '[FEE080302Q]query-form',
        detail_form: '[FEE080302Q]detail-form',
    },
    FEE080411M: {
        main_list: '[FEE080411M]main-list',
        query_form: '[FEE080411M]query-form',
        create_form: '[FEE080411M]create-form',
        edit_form: '[FEE080411M]edit-form',
        detail_form: '[FEE080411M]detail-form',
    },
};

const buttonTaskId = {
    FEE0109Q: {
        searchButton: 'FEE0109Q_searchbutton', // 查詢
        printButton: 'FEE0109Q_printbutton', // 列印發票一覽表
        detailButton: 'FEE0109Q_detailbutton', // 顯示明細頁按鈕
        downloadButton01: 'FEE0109Q_downloadbutton01', // 發票主檔下載按鈕
        downloadButton02: 'FEE0109Q_downloadbutton02', // 收費資料下載按鈕
        downloadButton03: 'FEE0109Q_downloadbutton03', // 發票更改紀錄資料下載按鈕
        downloadButton04: 'FEE0109Q_downloadbutton04', // 發票列印資料下載按鈕
        downloadButton05: 'FEE0109Q_downloadbutton05', // 優惠發票更改紀錄資料下載按鈕
    },
    FEE0401M: {
        copyButton: 'FEE0401M_copybutton',
        calculateButton: 'FEE0401M_calculatebutton',
        downloadButton: 'FEE0401M_downloadbutton',
        detailDownloadButton: 'FEE0401M_detaildownloadbutton',
        createButton: 'FEE0401M_createbutton',
        searchButton: 'FEE0401M_searchbutton',
        detailButton: 'FEE0401M_detailbutton',
        deleteButton: 'FEE0401M_deletebutton',
        editButton: 'FEE0401M_editbutton',
        editButton01: 'FEE0401M_editbutton01',
        editButton02: 'FEE0401M_editbutton02',
    },
    FEE0459M: {
        calculateButton: 'FEE0459M_calculatebutton',
        downloadButton: 'FEE0459M_downloadbutton',
        detailDownloadButton: 'FEE0459M_detaildownloadbutton',
        createButton: 'FEE0459M_createbutton',
        searchButton: 'FEE0459M_searchbutton',
        detailButton: 'FEE0459M_detailbutton',
        deleteButton: 'FEE0459M_deletebutton',
        editButton: 'FEE0459M_editbutton',
    },
    FEE010403M: {
        downloadButton: 'FEE010403M_downloadbutton',
        searchButton: 'FEE010403M_searchbutton',
        detailButton: 'FEE010403M_detailbutton',
        editButton: 'FEE010403M_editbutton',
        createButton: 'FEE010403M_createbutton',
        deleteButton: 'FEE010403M_deletebutton',
    },
    FEE010404M: {
        downloadButton: 'FEE010403M_downloadbutton',
        searchButton: 'FEE010403M_searchbutton',
        editButton: 'FEE010403M_editbutton',
        saveButton: 'FEE010403M_savebutton',
    },
    FEE010406M: {
        downloadButton: 'FEE010406M_downloadbutton',
        searchButton: 'FEE010406M_searchbutton',
        detailButton: 'FEE010406M_detailbutton',
        editButton: 'FEE010406M_editbutton',
        createButton: 'FEE010406M_createbutton',
        deleteButton: 'FEE010406M_deletebutton',
    },
    FEE010407M: {
        downloadButton: 'FEE010407M_downloadbutton',
        searchButton: 'FEE010407M_searchbutton',
        detailButton: 'FEE010407M_detailbutton',
        editButton: 'FEE010407M_editbutton',
        createButton: 'FEE010407M_createbutton',
        deleteButton: 'FEE010407M_deletebutton',
    },
    FEE010444M: {
        downloadButton: 'FEE010444M_downloadbutton',
        searchButton: 'FEE010444M_searchbutton',
        detailButton: 'FEE010444M_detailbutton',
        editButton: 'FEE010444M_editbutton',
        createButton: 'FEE010444M_createbutton',
        deleteButton: 'FEE010444M_deletebutton',
    },
    FEE010451B: {
        downloadButton: 'FEE010451B_downloadbutton',
        searchButton: 'FEE010451B_searchbutton',
        detailButton: 'FEE010451B_detailbutton',
        editButton: 'FEE010451B_editbutton',
        createButton: 'FEE010451B_createbutton',
        deleteButton: 'FEE010451B_deletebutton',
    },
    FEE010456Q: {
        downloadButton: 'FEE010456Q_downloadbutton',
        searchButton: 'FEE010456Q_searchbutton',
        detailButton: 'FEE010456Q_detailbutton',
    },
    FEE010460M: {
        downloadButton: 'FEE010460M_downloadbutton',
        searchButton: 'FEE010460M_searchbutton',
        detailButton: 'FEE010460M_detailbutton',
        saveButton: 'FEE010460M_savebutton',
    },
    FEE010802M: {
        downloadButton: 'FEE010802M_downloadbutton',
        searchButton: 'FEE010802M_searchbutton',
        detailButton: 'FEE010802M_detailbutton',
        popupCancelViewButton: 'FEE010802M_popupcancelviewbutton',
        cancelButton: 'FEE010802M_cancelbutton',
        releaseMediaButton: 'FEE010802M_releasemediabutton',
        releaseAccountButton: 'FEE010802M_releaseaccountbutton',
    },
    FEE030736Q: {
        downloadButton01: 'FEE030736Q_downloadbutton01',
        downloadButton02: 'FEE030736Q_downloadbutton02',
        searchButton: 'FEE030736Q_searchbutton',
    },
    FEE030737Q: {
        downloadButton01: 'FEE030737Q_downloadbutton01',
        downloadButton02: 'FEE030737Q_downloadbutton02',
        searchButton: 'FEE030737Q_searchbutton',
    },
    FEE030749Q: {
        downloadButton01: 'FEE030749Q_downloadbutton01',
        downloadButton02: 'FEE030749Q_downloadbutton02',
        downloadButton03: 'FEE030749Q_downloadbutton03',
        downloadButton04: 'FEE030749Q_downloadbutton04',
        searchButton: 'FEE030749Q_searchbutton',
    },
    FEE040420M: {
        downloadButton: 'FEE040420M_downloadbutton',
        searchButton: 'FEE040420M_searchbutton',
        detailButton: 'FEE040420M_detailbutton',
        editButton: 'FEE040420M_editbutton',
        createButton: 'FEE040420M_createbutton',
        deleteButton: 'FEE040420M_deletebutton',
    },
    FEE080302Q: {
        downloadButton: 'FEE080302Q_downloadbutton',
        searchButton: 'FEE080302Q_searchbutton',
        detailButton: 'FEE080302Q_detailbutton',
        printButton: 'FEE080302Q_printbutton', // 列印統計報表
    },
    FEE080411M: {
        downloadButton: 'FEE080411M_downloadbutton',
        searchButton: 'FEE080411M_searchbutton',
        detailButton: 'FEE080411M_detailbutton',
        editButton: 'FEE080411M_editbutton',
        createButton: 'FEE080411M_createbutton',
        deleteButton: 'FEE080411M_deletebutton',
    },
    FEE0804M: {
        downloadButton: 'FEE0804M_downloadbutton',
        createButton: 'FEE0804M_createbutton',
        searchButton: 'FEE0804M_searchbutton',
        detailButton: 'FEE0804M_detailbutton',
        deleteButton: 'FEE0804M_deletebutton',
        editButton: 'FEE0804M_editbutton',
    },
    FEE0750B: {
        printButton: 'FEE0750B_printbutton',
        showSendListButton: 'FEE0750B_showsendlistbutton',
        sendButton: 'FEE0750B_sendbutton',
        downloadButton: 'FEE0750B_downloadbutton',
    },
};

const viewMode = {
    FEE0109Q: {
        detail: 'detail',
        query: 'query',
        list: 'list',
    },
    FEE0401M: {
        detail: 'detail',
        copy: 'copy',
        create: 'create',
        edit: 'edit',
        edit_1: 'edit_1',
        edit_2: 'edit_2',
        list: 'list',
    },
    FEE0402M: {
        detail: 'detail',
        create: 'create',
        edit: 'edit',
        list: 'list',
    },
    FEE0459M: {
        detail: 'detail',
        edit: 'edit',
        list: 'list',
        query: 'query',
        sub_detail: 'sub_detail',
        sub_create: 'sub_create',
        sub_edit: 'sub_edit',
        sub_delete: 'sub_delete',
    },
    FEE0804M: {
        detail: 'detail',
        create: 'create',
        edit: 'edit',
        query: 'query',
    },
    FEE010403M: {
        detail: 'detail',
        create: 'create',
        edit: 'edit',
        query: 'query',
    },
    FEE010406M: {
        detail: 'detail',
        create: 'create',
        edit: 'edit',
        query: 'query',
    },
    FEE010407M: {
        detail: 'detail',
        create: 'create',
        edit: 'edit',
        query: 'query',
    },
    FEE010444M: {
        detail: 'detail',
        create: 'create',
        edit: 'edit',
        query: 'query',
    },
    FEE010451B: {
        detail: 'detail',
        create: 'create',
        edit: 'edit',
        query: 'query',
    },
    FEE010456Q: {
        detail: 'detail',
        create: 'create',
        edit: 'edit',
        query: 'query',
    },
    FEE010802M: {
        detail: 'detail',
        query: 'query',
    },
    FEE030736Q: {
        detail: 'detail',
        query: 'query',
    },
    FEE040420M: {
        detail: 'detail',
        create: 'create',
        edit: 'edit',
        query: 'query',
    },
    FEE080302Q: {
        detail: 'detail',
        query: 'query',
    },
    FEE080411M: {
        detail: 'detail',
        create: 'create',
        edit: 'edit',
        query: 'query',
    },
};

const feeProperty = {cellStatus, buttonTaskId, componentId, viewMode};

export default feeProperty;
