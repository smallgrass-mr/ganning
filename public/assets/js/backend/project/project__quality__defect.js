define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'project/project__quality__defect/index' + location.search,
                    add_url: 'project/project__quality__defect/add',
                    edit_url: 'project/project__quality__defect/edit',
                    // del_url: 'project/project__quality__defect/del',
                    multi_url: 'project/project__quality__defect/multi',
                    import_url: 'project/project__quality__defect/import',
                    table: 'project_quality_defect',
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
                        {field: 'title', title: __('Title'), operate: 'LIKE', table: table, class: 'autocontent', formatter: Table.api.formatter.content},
                        {field: 'project_id', title: __('Project_id')},
                        {field: 'project_name', title: __('项目名称')},
                        {field: 'user_id', title: __('User_id')},
                        {field: 'user_name', title: __('用户名')},
                        {field: 'user_nickname', title: __('用户昵称')},
                        {field: 'type',
                            title: __('类型'),
                            searchList: { 1: '积水',2:'麻面',3:'接缝缺陷',4:'少料',5:'开裂'},
                            formatter: function (value) {
                                if (value == 1) {
                                    return "<span style='color: green'>积水</span>"
                                }else if (value ==2){
                                    return "<span style='color: green'>麻面</span>"
                                }else if (value ==3){
                                    return "<span style='color: green'>接缝缺陷</span>"
                                }else if (value ==4){
                                    return "<span style='color: green'>少料</span>"
                                }else if (value ==5){
                                    return "<span style='color: green'>开裂</span>"
                                }
                            }
                        },
                        // {field: 'level', title: __('Level')},
                        {field: 'level',
                            title: __('等级'),
                            searchList: { 1: '一般',2:'严重',3:'非常严重'},
                            formatter: function (value) {
                                if (value == 1) {
                                    return "<span style='color: green'>一般</span>"
                                }else if (value ==2){
                                    return "<span style='color: yellow'>严重</span>"
                                }else if (value ==3){
                                    return "<span style='color: red'>非常严重</span>"
                                }
                            }
                        },
                        {field: 'date', title: __('Date'), operate: 'LIKE', table: table, class: 'autocontent', formatter: Table.api.formatter.content},
                        {field: 'desc', title: __('Desc'), operate: 'LIKE', table: table, class: 'autocontent', formatter: Table.api.formatter.content},
                        {field: 'manage_id', title: __('Manage_id')},
                        {field: 'manage_name', title: __('现场管理')},
                        {field: 'image', title: __('Image'), operate: false, events: Table.api.events.image, formatter: Table.api.formatter.image},
                        {field: 'status', title: __('Status'), searchList: {"0":__('未处理'),"1":"已处理"}, formatter: Table.api.formatter.status},
                        {field: 'createtime', title: __('Createtime'), operate:'RANGE', addclass:'datetimerange', autocomplete:false, formatter: Table.api.formatter.datetime},
                        {field: 'updatetime', title: __('Updatetime'), operate:'RANGE', addclass:'datetimerange', autocomplete:false, formatter: Table.api.formatter.datetime},
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
