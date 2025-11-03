define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'user/use_expenses_log/index' + location.search,
                    add_url: 'user/use_expenses_log/add',
                    edit_url: 'user/use_expenses_log/edit',
                    del_url: 'user/use_expenses_log/del',
                    multi_url: 'user/use_expenses_log/multi',
                    import_url: 'user/use_expenses_log/import',
                    table: 'user_expenses_log',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'id',
                sortName: 'id',
                fixedColumns: true,
                fixedRightNumber: 1,
                columns: [
                    [
                        {checkbox: true},
                        {field: 'id', title: __('Id')},
                        {field: 'user_id', title: __('User_id')},
                        {field: 'project_id', title: __('Project_id')},
                        {field: 'project_name', title: __('项目名称')},
                        {field: 'user_work_log_id', title: __('User_work_log_id')},
                        {field: 'user_name', title: __('用户手机')},
                        {field: 'user_nickname', title: __('用户昵称')},
                        {field: 'manage_id', title: __('Manage_id')},
                        {field: 'manage_name', title: __('管理员名称')},
                        {field: 'price', title: __('单价')},
                        {field: 'num', title: __('数量')},
                        {field: 'total', title: __('总价')},
                        {field: 'desc', title: __('描述')},
                        {field: 'mobile', title: __('Mobile'), operate: 'LIKE', table: table, class: 'autocontent', formatter: Table.api.formatter.content},
                        {field: 'type',
                            title: __('类型'),
                            searchList: { 1: '寻乌GN',2:'GN',},
                            formatter: function (value) {
                                if (value == 1) {
                                    return "<span style='color: green'>寻乌GN</span>"
                                }else if (value ==2){
                                    return "<span style='color: green'>GN</span>"
                                }
                            }
                        },

                        {field: 'date', title: __('Date'), operate: 'LIKE', table: table, class: 'autocontent', formatter: Table.api.formatter.content},
                        {field: 'image', title: __('Image'), operate: false, events: Table.api.events.image, formatter: Table.api.formatter.image},
                        {field: 'status',
                            title: __('状态'),
                            searchList: { 0: '待处理', 1: '已到账',2:'已提交'},
                            formatter: function (value) {
                                if (value == 0) {
                                    return "<span style='color: red'>待处理</span>"
                                }else if (value == 1) {
                                    return "<span style='color: green'>已到账</span>"
                                }else if (value == 2) {
                                    return "<span style='color: green'>已提交</span>"
                                }
                            }
                        },
                        {field: 'desc', title: __('Desc'), operate: 'LIKE', table: table, class: 'autocontent', formatter: Table.api.formatter.content},
                        {field: 'updatetime', title: __('Updatetime'), operate:'RANGE', addclass:'datetimerange', autocomplete:false, formatter: Table.api.formatter.datetime},
                        {field: 'createtime', title: __('Createtime'), operate:'RANGE', addclass:'datetimerange', autocomplete:false, formatter: Table.api.formatter.datetime},
                        {field: 'operate', title: __('Operate'), table: table, events: Table.api.events.operate, formatter: Table.api.formatter.operate}
                    ]
                ]
            });

            // 为表格绑定事件
            Table.api.bindevent(table);
        },
        add: function () {
            Controller.api.bindevent();
        },
        edit: function () {
            Controller.api.bindevent();
        },
        api: {
            bindevent: function () {
                Form.api.bindevent($("form[role=form]"));
            }
        }
    };
    return Controller;
});
