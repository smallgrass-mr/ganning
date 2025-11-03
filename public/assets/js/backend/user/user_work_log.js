define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'user/user_work_log/index' + location.search,
                    add_url: 'user/user_work_log/add',
                    edit_url: 'user/user_work_log/edit',
                    del_url: 'user/user_work_log/del',
                    multi_url: 'user/user_work_log/multi',
                    import_url: 'user/user_work_log/import',
                    table: 'user_work_log',
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
                        {field: 'user_nickname', title: __('用户昵称')},
                        {field: 'user_name', title: __('用户手机')},
                        {field: 'name', title: __('工时名称')},
                        {field: 'date', title: __('日期')},
                        {field: 'desc', title: __('描述')},
                        {field: 'project_id', title: __('项目ID')},
                        {field: 'project_name', title: __('项目名称')},
                        {field: 'mobile', title: __('Mobile'), operate: 'LIKE', table: table, class: 'autocontent', formatter: Table.api.formatter.content},
                        {field: 'long', title: __('时长（min）')},
                        {field: 'image', title: __('Image'), operate: false, events: Table.api.events.image, formatter: Table.api.formatter.image},
                        {field: 'is_add_work', title: __('Is_add_work')},
                        {field: 'add_work_long', title: __('Add_work_long')},
                        {field: 'manage_id', title: __('Manage_id')},
                        {field: 'manage_name', title: __('管理员名称')},
                        {field: 'status',
                            title: __('状态'),
                            searchList: { 0: '未审核', 1: '审核通过', 2: '审核驳回'},
                            formatter: function (value) {
                                if (value == 0) {
                                    return "<span style='color: grey'>未审核</span>"
                                }else if (value == 1) {
                                    return "<span style='color: green'>审核通过</span>"
                                }else if (value == 2) {
                                    return "<span style='color: red'>审核驳回</span>"
                                }
                            }
                        },
                        {field: 'is_continuous', title: __('Is_continuous')},
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
