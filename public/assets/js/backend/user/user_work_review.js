define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'user/user_work_review/index' + location.search,
                    add_url: 'user/user_work_review/add',
                    edit_url: 'user/user_work_review/edit',
                    del_url: 'user/user_work_review/del',
                    multi_url: 'user/user_work_review/multi',
                    import_url: 'user/user_work_review/import',
                    table: 'user_work_review',
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
                        {field: 'user_name', title: __('用户手机')},
                        {field: 'user_nickname', title: __('用户昵称')},
                        {field: 'manage_name', title: __('管理员名称')},
                        {field: 'user_work_log_id', title: __('User_work_log_id')},
                        {field: 'mobile', title: __('Mobile'), operate: 'LIKE', table: table, class: 'autocontent', formatter: Table.api.formatter.content},
                        // {field: 'type', title: __('类型')},
                        // 1 拒绝执行 2带情绪 3偷懒 4积极解决问题 5做事有方法 6特别技能 7 磨时间 8 做事消极:
                        {field: 'type',
                            title: __('类型'),
                            searchList: { 1: '1拒绝执行', 2: '2带情绪', 3: '3偷懒', 4: '4积极解决问题', 5: '5做事有方法', 6: '6特别技能', 7: '7磨时间', 8: '8做事消极'},
                            formatter: function (value) {
                                if (value == 1) {
                                    return "<span style='color: red'>1拒绝执行</span>"
                                }else if (value == 2) {
                                    return "<span style='color: green'>2带情绪</span>"
                                }else if (value == 3) {
                                    return "<span style='color: green'>3偷懒</span>"
                                }else if (value == 4) {
                                    return "<span style='color: green'>4积极解决问题</span>"
                                }else if (value == 5) {
                                    return "<span style='color: green'>5做事有方法</span>"
                                }else if (value == 6) {
                                    return "<span style='color: green'>6特别技能</span>"
                                }else if (value == 7) {
                                    return "<span style='color: green'>7磨时间</span>"
                                }else if (value == 8) {
                                    return "<span style='color: green'>8做事消极</span>"
                                }
                            }
                        },
                        {field: 'score', title: __('Score')},
                        {field: 'date', title: __('Date'), operate: 'LIKE', table: table, class: 'autocontent', formatter: Table.api.formatter.content},
                        {field: 'image', title: __('Image'), operate: false, events: Table.api.events.image, formatter: Table.api.formatter.image},
                        // {field: 'status', title: __('Status')},
                        {field: 'desc', title: __('Desc'), operate: 'LIKE', table: table, class: 'autocontent', formatter: Table.api.formatter.content},
                        {field: 'manage_id', title: __('Manage_id')},
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
