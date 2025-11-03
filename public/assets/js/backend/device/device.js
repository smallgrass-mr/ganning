define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'device/device/index' + location.search,
                    add_url: 'device/device/add',
                    edit_url: 'device/device/edit',
                    del_url: 'device/device/del',
                    multi_url: 'device/device/multi',
                    import_url: 'device/device/import',
                    table: 'device',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'id',
                sortName: 'id',
                columns: [
                    [
                        {checkbox: true},
                        {field: 'id', title: __('Id')},
                        {field: 'name', title: __('Name'), operate: 'LIKE', table: table, class: 'autocontent', formatter: Table.api.formatter.content},
                        {field: 'user_id', title: __('User_id')},
                        {field: 'type',
                            title: __('类型'),
                            searchList: { 1: ' 1压路设备',2: '2料车设备',3: '3搅拌设备',4: '4辅助设备',5: '5小型设备',6: ' 6其他'},
                            formatter: function (value) {
                                if (value == 1) {
                                    return "<span style='color: green'>1压路设备</span>"
                                } else if (value == 2) {
                                    return "<span style='color: green'>2料车设备</span>"
                                } else if (value == 3) {
                                    return "<span style='color: green'>3搅拌设备</span>"
                                } else if (value == 4) {
                                    return "<span style='color: green'>4辅助设备</span>"
                                } else if (value == 5) {
                                    return "<span style='color: green'>5小型设备</span>"
                                } else if (value == 6) {
                                    return "<span style='color: green'>6其他</span>"
                                }
                            }
                        },
                        {field: 'image', title: __('Image'), operate: false, events: Table.api.events.image, formatter: Table.api.formatter.image},
                        {field: 'desc', title: __('Desc'), operate: 'LIKE', table: table, class: 'autocontent', formatter: Table.api.formatter.content},
                        {field: 'status',
                            title: __('状态'),
                            searchList: { 0: '异常', 1: '正常',},
                            formatter: function (value) {
                                if (value == 0) {
                                    return "<span style='color: red'>异常</span>"
                                }else if (value == 1) {
                                    return "<span style='color: green'>正常</span>"
                                }
                            }
                        },
                        {field: 'updatetime', title: __('Updatetime'), operate:'RANGE', addclass:'datetimerange', autocomplete:false, formatter: Table.api.formatter.datetime},
                        {field: 'createtime', title: __('Createtime'), operate:'RANGE', addclass:'datetimerange', autocomplete:false, formatter: Table.api.formatter.datetime},
                        // {field: 'operate', title: __('Operate'), table: table, events: Table.api.events.operate, formatter: Table.api.formatter.operate}
                        {
                            field: 'operate',
                            title: __('Operate'),
                            table: table,
                            events: Table.api.events.operate,
                            buttons: [
                                {
                                    name: 'subreply',
                                    title: '维修保养记录',
                                    icon: 'fa fa-list-alt',
                                    classname: 'btn btn-warning btn-xs btn-dialog btn-subreply',
                                    url: function (row) {
                                        return 'device/device_maintenance_log/index?device_id=' + row.id;
                                    }
                                }
                            ],
                            formatter: Table.api.formatter.operate
                        }
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
