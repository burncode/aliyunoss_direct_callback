/**
 * Created by fuzuchang on 2016-08-23.
 */


var AliyunOSS = {
    result:{},//保存policy的结果
    expire:0,  //保存请求policy的过期时间，减少获取policy的请求次数
    policyUrl:"./policy.php",//获取policy的地址
    /**
     * 随机数
     * @param len
     * @returns {string}
     */
    random_string : function (len) {
        len = len || 32;
        var chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
        var maxPos = chars.length;
        var pwd = '';
        for (var i = 0; i < len; i++) {
            pwd += chars.charAt(Math.floor(Math.random() * maxPos));
        }
        return pwd;
    },
    /**
     * 获得文件扩展名称
     * @param filename
     * @returns {string|*}
     */
     get_suffix:function(filename) {
        var pos = filename.lastIndexOf('.');
        if (pos != -1) {
            this.suffix = filename.substring(pos)
        }
        return this.suffix;
    },
    /**
     * 获得policy
     * @param data
     */
    get_policy:function (data) {
        var self = this;
        var now = Date.parse(new Date()) / 1000;
        if (this.expire < now + 3 ){
            $.ajax({
                url     : this.policyUrl,
                type    : 'post',
                dataType: 'json',
                async   : false,
                success : function (result)
                {
                    //用户请求的accessid
                    self.result.OSSAccessKeyId    = result.accessid;
                    //用户表单上传的策略policy, 是经过base64编码过的字符串
                    self.result.policy            = result.policy;
                    //上传地址
                    self.result.url               = result.host;
                    //成功状态码
                    self.result.success_action_status  = 200;
                    //回调参数
                    self.result.callback          = result.callback;
                    //对policy的签名
                    self.result.signature         = result.signature;
                    //当前上传策略失效时间
                    self.result.expire            = result.expire;
                    //OSS目录
                    self.result.dir               = result.dir ;
                }
            });
        }
    }

};
