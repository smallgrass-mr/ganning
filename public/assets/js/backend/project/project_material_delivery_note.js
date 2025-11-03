define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'project/project_material_delivery_note/index' + location.search,
                    add_url: 'project/project_material_delivery_note/add',
                    edit_url: 'project/project_material_delivery_note/edit',
                    del_url: 'project/project_material_delivery_note/del',
                    multi_url: 'project/project_material_delivery_note/multi',
                    import_url: 'project/project_material_delivery_note/import',
                    table: 'project_material_delivery_note',
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
                        {field: 'type',
                            title: __('类型'),
                            searchList: { 1: ' 1进货单',2: '2出货单'},
                            formatter: function (value) {
                                if (value == 1) {
                                    return "<span style='color: green'>1进货单</span>"
                                } else if (value == 2) {
                                    return "<span style='color: green'>2出货单</span>"
                                }
                            }
                        },
                        {field: 'sign_type',
                            title: __('签单类型'),
                            searchList: { 1: ' 1内部签单',2: '2第三方签单'},
                            formatter: function (value) {
                                if (value == 1) {
                                    return "<span style='color: green'>1内部签单</span>"
                                } else if (value == 2) {
                                    return "<span style='color: green'>2第三方签单</span>"
                                }
                            }
                        },
                        {field: 'date', title: __('Date'), operate: 'LIKE', table: table, class: 'autocontent', formatter: Table.api.formatter.content},
                        {field: 'title', title: __('Title'), operate: 'LIKE', table: table, class: 'autocontent', formatter: Table.api.formatter.content},
                        {field: 'image', title: __('Image'), operate: false, events: Table.api.events.image, formatter: Table.api.formatter.image},
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
                        {field: 'manage_id', title: __('Manage_id')},
                        {field: 'updatetime', title: __('Updatetime'), operate:'RANGE', addclass:'datetimerange', autocomplete:false, formatter: Table.api.formatter.datetime},
                        {field: 'createtime', title: __('Createtime'), operate:'RANGE', addclass:'datetimerange', autocomplete:false, formatter: Table.api.formatter.datetime},
                        {field: 'desc', title: __('Desc'), operate: 'LIKE', table: table, class: 'autocontent', formatter: Table.api.formatter.content},
                        {field: 'car_id', title: __('Car_id')},
                        {field: 'weight', title: __('Weight')},
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
