define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'device/device_maintenance_log/index' + location.search,
                    add_url: 'device/device_maintenance_log/add',
                    edit_url: 'device/device_maintenance_log/edit',
                    // del_url: 'device/device_maintenance_log/del',
                    multi_url: 'device/device_maintenance_log/multi',
                    import_url: 'device/device_maintenance_log/import',
                    table: 'device_maintenance_log',
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
                        {field: 'device_id', title: __('Device_id')},
                        {field: 'device_name', title: __('设备名称')},
                        {field: 'user_id', title: __('User_id')},
                        {field: 'user_name', title: __('用户名称')},
                        {field: 'type',
                            title: __('类型'),
                            searchList: { 1: '维修',2:'保养',},
                            formatter: function (value) {
                                if (value == 1) {
                                    return "<span style='color: green'>维修</span>"
                                }else if (value ==2){
                                    return "<span style='color: green'>保养</span>"
                                }
                            }
                        },
                        {field: 'total', title: __('Total'), operate:'BETWEEN'},
                        {field: 'date', title: __('Date'), operate: 'LIKE', table: table, class: 'autocontent', formatter: Table.api.formatter.content},
                        {field: 'desc', title: __('Desc'), operate: 'LIKE', table: table, class: 'autocontent', formatter: Table.api.formatter.content},
                        {field: 'image', title: __('Image'), operate: false, events: Table.api.events.image, formatter: Table.api.formatter.image},
                        {field: 'manage_id', title: __('Manage_id')},
                        {field: 'manage_name', title: __('管理员')},
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
