# aisidi流量包充值接口
## 1.1. 流量订购 
    接口地址(HTTP POST 请求，参数为 JSON 格式): 
    http://IP:端口/部署名称/FCOrderServlet  

| 参数        | 必填           | 加密  |    备注     |
| ------------- |:-------------:| -----:|  -----:   |
| timestamp      | 是 |  无 |       | 时间戳（毫秒，该时间与服务端时间 相差不得超过 5min）,时间戳的获取 |
| col 2 is      | centered      |   $12 |       |
| zebra stripes | are neat      |    $1 |       |

        
       
    account 是 无 账号 
mobiles 是 无 流量订购手机号码 
sign 是 有 认证签名,点此查看加密方式 
packageSize 是 无 流量包大小(10 ,70,500,1000,2000 等) 
点此查看说明 
msgTemplateId 否 无 短信模板ID 
clientOrderId 否 无 客户订单号，6-32位字符串,(字母或数字) 
  
2.1.1. sign 算法 
sign=MD5(account+MD5(pwd)+timestamp+mobiles)  
2.1.2. packageSize 说明 
如果订购 500M 流量包，则 packageSize 为“500”，1G 流量包，packageSize 为”1000”，
nG 则为 n*1000。 