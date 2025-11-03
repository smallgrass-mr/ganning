<?php

namespace app\admin\model\device;

use think\Model;


class Device extends Model
{

    

    

    // 表名
    protected $name = 'device';
    
    // 自动写入时间戳字段
    protected $autoWriteTimestamp = 'integer';

    // 定义时间戳字段名
    protected $createTime = 'createtime';
    protected $updateTime = 'updatetime';
    protected $deleteTime = false;

    // 追加属性
    protected $append = [

    ];
    

    







}
