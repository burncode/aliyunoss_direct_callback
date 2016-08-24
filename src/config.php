<?php
/**
 * 配置文件
 * Created by PhpStorm.
 * User: fuzuchang
 * Date: 2016-08-23
 * Time: 13:05
 */
//Access Key ID
define("ALI_OSS_ACCESS_KEY_ID","");
//Access Key Secret
define("ALI_OSS_ACCESS_KEY_SECRET","");
//OSS主机地址
define("ALI_OSS_HOST",""); //ex: http://bucket.oss-cn-shenzhen.aliyuncs.com
//回调服务器地址
define("ALI_OSS_CALLBACK_URL","../notify.php");//ex: http://bucket.oss-cn-shenzhen.aliyuncs.com
//OSS请求时，发送给应用服务器的内容 自定义参数等等
define("ALI_OSS_CALLBACK_BODY",'user=${x:user}&filename=${x:filename}&objectName=${object}&size=${size}&mimeType=${mimeType}&height=${imageInfo.height}&width=${imageInfo.width}');
//OSS请求时,请求发送的Content-Type
define("ALI_OSS_CALLBACK_BODY_TYPE",'application/x-www-form-urlencoded');
//上传策略失效时间
define("ALI_OSS_EXPIRE",'30');
//上传目录
define("ALI_OSS_UPLOAD_DIR",'files/');
//最大上传文件大小 以字节为单位
define("ALI_OSS_MAX_UPLOAD_BYTES",1048576000);