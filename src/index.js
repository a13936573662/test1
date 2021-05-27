import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Table, Switch, Space } from 'antd';

const columns = [
  {
    title: '项目',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: '行次',
    dataIndex: 'row',
    key: 'row'
  },
  {
    title: '本月数',
    dataIndex: 'mNumber',
    key: 'mNumber'
  },
  {
    title: '本年累计',
    dataIndex: 'yNumber',
    key: 'yNumber'
  },
  {
    title: '上年同期',
    dataIndex: 'lastYear',
    key: 'lastYear'
  }
];

const data = [
  {
    key: 1,
    name: '一、营业总收入',
    row: 1,
    mNumber: '-',
    yNumber: '-',
    lastYear: '-',
    children: [
      {
        key: 2,
        name: '营业收入',
        row: 2,
        mNumber: '-',
        yNumber: '-',
        lastYear: '-',
        children: [
          {
            key: 3,
            name: '其中：主营业务收入',
            row: 3,
            mNumber: '-',
            yNumber: '-',
            lastYear: '-',
            children: [
              {
                key: 33,
                name: '一、基础语音业务',
                row: '',
                mNumber: '-',
                yNumber: '-',
                lastYear: '-',
                children: [
                  {
                    key: 34,
                    name: '（一）月租费',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-'
                  },
                  {
                    key: 35,
                    name: '（二）通话费',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-',
                    children: [
                      {
                        key: 36,
                        name: '1、普通电话',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-',
                        children: [
                          {
                            key: 37,
                            name: '（1）本地通话费',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-'
                          },
                          {
                            key: 38,
                            name: '（2）异地拨打通话费',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-'
                          },
                          {
                            key: 39,
                            name: '（3）拨打异地通话费',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-'
                          }
                        ]
                      },
                      {
                        key: 40,
                        name: '2、可视电话',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-',
                        children: [
                          {
                            key: 41,
                            name: '（1）本地通话费',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-'
                          },
                          {
                            key: 42,
                            name: '（2）异地拨打通话费',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-'
                          },
                          {
                            key: 43,
                            name: '（3）拨打异地通话费',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-'
                          }
                        ]
                      },
                      {
                        key: 44,
                        name: '（三）一次性费用',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-',
                        children: [
                          {
                            key: 45,
                            name: '（1）VIK',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-'
                          },
                          {
                            key: 46,
                            name: '（2）其他',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-'
                          }
                        ]
                      },
                      {
                        key: 47,
                        name: '（四）VIK',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      },
                      {
                        key: 48,
                        name: '（五）其他',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      }
                    ]
                  }
                ]
              },
              {
                key: 49,
                name: '二、数据及信息业务',
                row: '',
                mNumber: '-',
                yNumber: '-',
                lastYear: '-',
                children: [
                  {
                    key: 50,
                    name: '（一）移动VPDN',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-'
                  },
                  {
                    key: 51,
                    name: '（二）无线上网卡',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-'
                  },
                  {
                    key: 52,
                    name: '（三）手机接入',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-',
                    children: [
                      {
                        key: 53,
                        name: '1、定向流量',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      },
                      {
                        key: 54,
                        name: '2、后向流量',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      },
                      {
                        key: 55,
                        name: '3、VIK',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      },
                      {
                        key: 56,
                        name: '4、网速宝',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      },
                      {
                        key: 57,
                        name: '5、其他',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      }
                    ]
                  },
                  {
                    key: 58,
                    name: '（四）短信',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-',
                    children: [
                      {
                        key: 59,
                        name: '1、VIK',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      },
                      {
                        key: 60,
                        name: '2、行业数字短信',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      },
                      {
                        key: 61,
                        name: '3、企业名片',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      },
                      {
                        key: 62,
                        name: '4、其他',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      }
                    ]
                  },
                  {
                    key: 63,
                    name: '（五）彩信',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-',
                    children: [
                      {
                        key: 64,
                        name: '1、VIK',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      },
                      {
                        key: 65,
                        name: '2、其他',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      }
                    ]
                  },
                  {
                    key: 66,
                    name: '（六）语音VPN',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-'
                  },
                  {
                    key: 67,
                    name: '（七）个性化回铃音',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-',
                    children: [
                      {
                        key: 68,
                        name: '1、视频彩铃',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      },
                      {
                        key: 71,
                        name: '2、其他',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      }
                    ]
                  },
                  {
                    key: 76,
                    name: '（八）WAP业务',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-'
                  },
                  {
                    key: 77,
                    name: '（九）JAVA业务',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-'
                  },
                  {
                    key: 78,
                    name: '（十）手机音乐',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-'
                  },
                  {
                    key: 79,
                    name: '（十一）沃阅读',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-'
                  },
                  {
                    key: 80,
                    name: '（十二）手机报',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-'
                  },
                  {
                    key: 81,
                    name: '（十三）沃商店',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-'
                  },
                  {
                    key: 82,
                    name: '（十四）手机邮箱',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-'
                  },
                  {
                    key: 83,
                    name: '（十五）手机电视',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-'
                  },
                  {
                    key: 84,
                    name: '（十六）手机支付',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-'
                  },
                  {
                    key: 85,
                    name: '（十七）信息导航',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-',
                    children: [
                      {
                        key: 86,
                        name: '1、通信助理',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      },
                      {
                        key: 87,
                        name: '2、电子商务',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      },
                      {
                        key: 88,
                        name: '3、行业信息',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      },
                      {
                        key: 89,
                        name: '4、信息经营',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      },
                      {
                        key: 90,
                        name: '5、声讯',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      },
                      {
                        key: 91,
                        name: '6、其他',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      }
                    ]
                  },
                  {
                    key: 92,
                    name: '（十八）融合应用',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-'
                  },
                  {
                    key: 93,
                    name: '（十九）黑莓服务',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-'
                  },
                  {
                    key: 94,
                    name: '（二十）电话广告',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-'
                  },
                  {
                    key: 95,
                    name: '（廿一）黄页广告',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-'
                  },
                  {
                    key: 96,
                    name: '（廿二）网络媒体广告',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-'
                  },
                  {
                    key: 97,
                    name: '（廿三）来电显示',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-'
                  },
                  {
                    key: 98,
                    name: '（廿四）商务交易',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-'
                  },
                  {
                    key: 99,
                    name: '（廿五）沃游戏',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-'
                  },
                  {
                    key: 100,
                    name: '（廿六）WO+能力共享',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-'
                  },
                  {
                    key: 101,
                    name: '（廿七）融合信息服务',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-',
                    children: [
                      {
                        key: 102,
                        name: '1、位置信息服务',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      },
                      {
                        key: 107,
                        name: '2、其他',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      }
                    ]
                  },

                  {
                    key: 108,
                    name: '（廿八）云计算',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-'
                  },
                  {
                    key: 109,
                    name: '（廿九）信息化应用',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-'
                  },
                  {
                    key: 110,
                    name: '（三十）TV增值',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-'
                  },
                  {
                    key: 111,
                    name: '（卅一）安防应用',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-'
                  },
                  {
                    key: 112,
                    name: '（卅二）视频监控',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-'
                  },
                  {
                    key: 113,
                    name: '（卅三）视频传送',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-'
                  },
                  {
                    key: 114,
                    name: '（卅四）沃视频',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-'
                  },
                  {
                    key: 115,
                    name: '（卅五）畅视',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-'
                  },
                  {
                    key: 116,
                    name: '（卅六）银龄卡号外',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-'
                  },
                  {
                    key: 117,
                    name: '（卅七）一次性费用',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-',
                    children: [
                      {
                        key: 118,
                        name: '1、VIK',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      },
                      {
                        key: 119,
                        name: '2、其他',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      }
                    ]
                  },
                  {
                    key: 120,
                    name: '（卅八）云讯通',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-'
                  },
                  {
                    key: 121,
                    name: '（卅九）移网云加速',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-'
                  },
                  {
                    key: 122,
                    name: '（四十）增值业务—VIK',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-'
                  },
                  {
                    key: 123,
                    name: '（四十一）VIK',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-',
                    children: [
                      {
                        key: 124,
                        name: '1、传统业务',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      },
                      {
                        key: 125,
                        name: '2、创新业务',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      }
                    ]
                  },
                  {
                    key: 126,
                    name: '（四十二）手机管家',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-'
                  },
                  {
                    key: 127,
                    name: '（四十三）plus会员',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-'
                  },
                  {
                    key: 128,
                    name: '（四十四）其他',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-'
                  }
                ]
              },
              {
                key: 129,
                name: '三、物联网',
                row: '',
                mNumber: '-',
                yNumber: '-',
                lastYear: '-',
                children: [
                  {
                    key: 130,
                    name: '（一）物联网连接服务',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-'
                  },
                  {
                    key: 131,
                    name: '（二）物联网应用服务',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-'
                  },
                  {
                    key: 132,
                    name: '（三）物联网部件服务',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-'
                  },
                  {
                    key: 133,
                    name: '（四）物联网方案集成服务',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-',
                    children: [
                      {
                        key: 134,
                        name: '1、工程服务',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      },
                      {
                        key: 135,
                        name: '2、融资租赁',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      },
                      {
                        key: 136,
                        name: '3、经营租赁',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      },
                      {
                        key: 137,
                        name: '4、技术服务',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      }
                    ]
                  },
                  {
                    key: 138,
                    name: '（五）VIK',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-'
                  }
                ]
              },
              {
                key: 139,
                name: '四、移动大数据业务',
                row: '',
                mNumber: '-',
                yNumber: '-',
                lastYear: '-',
                children: [
                  {
                    key: 140,
                    name: '（一）数据类',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-'
                  },
                  {
                    key: 141,
                    name: '（二）应用类',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-'
                  },
                  {
                    key: 142,
                    name: '（三）方案集成',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-',
                    children: [
                      {
                        key: 143,
                        name: '1、工程服务',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      },
                      {
                        key: 144,
                        name: '2、融资租赁',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      },
                      {
                        key: 145,
                        name: '3、经营租赁',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      },
                      {
                        key: 146,
                        name: '4、技术服务',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      }
                    ]
                  },
                  {
                    key: 147,
                    name: '（五）VIK',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-'
                  }
                ]
              },
              {
                key: 148,
                name: '五、支付及金融产品',
                row: '',
                mNumber: '-',
                yNumber: '-',
                lastYear: '-',
                children: [
                  {
                    key: 149,
                    name: '（一）支付产品',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-'
                  },
                  {
                    key: 150,
                    name: '（二）金融产品',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-'
                  }
                ]
              },
              {
                key: 151,
                name: '六、固话',
                row: '',
                mNumber: '-',
                yNumber: '-',
                lastYear: '-',
                children: [
                  {
                    key: 152,
                    name: '（一）基础语音业务',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-',
                    children: [
                      {
                        key: 153,
                        name: '1、固定电话',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-',
                        children: [
                          {
                            key: 154,
                            name: '（1）月租费',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-'
                          },
                          {
                            key: 155,
                            name: '（2）通话费',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-',
                            children: [
                              {
                                key: 156,
                                name: 'a、本地通话费',
                                row: '',
                                mNumber: '-',
                                yNumber: '-',
                                lastYear: '-'
                              },
                              {
                                key: 157,
                                name: 'b、长途通话费',
                                row: '',
                                mNumber: '-',
                                yNumber: '-',
                                lastYear: '-',
                                children: [
                                  {
                                    key: 158,
                                    name: '(i)国内',
                                    row: '',
                                    mNumber: '-',
                                    yNumber: '-',
                                    lastYear: '-'
                                  },
                                  {
                                    key: 159,
                                    name: '(ii)国际',
                                    row: '',
                                    mNumber: '-',
                                    yNumber: '-',
                                    lastYear: '-'
                                  },
                                  {
                                    key: 160,
                                    name: '(iii)台港澳',
                                    row: '',
                                    mNumber: '-',
                                    yNumber: '-',
                                    lastYear: '-'
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            key: 161,
                            name: '（3）装移机费',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-'
                          },
                          {
                            key: 162,
                            name: '（4）VIK',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-'
                          },
                          {
                            key: 163,
                            name: '（5）其他',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-'
                          }
                        ]
                      },
                      {
                        key: 164,
                        name: '2、固定可视电话',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-',
                        children: [
                          {
                            key: 165,
                            name: '（1）月租费',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-'
                          },
                          {
                            key: 166,
                            name: '（2）通话费',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-',
                            children: [
                              {
                                key: 167,
                                name: 'a、本地通话费',
                                row: '',
                                mNumber: '-',
                                yNumber: '-',
                                lastYear: '-'
                              },
                              {
                                key: 168,
                                name: 'b、长途通话费-国内',
                                row: '',
                                mNumber: '-',
                                yNumber: '-',
                                lastYear: '-'
                              }
                            ]
                          },
                          {
                            key: 169,
                            name: '（3）装移机费',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-'
                          },
                          {
                            key: 170,
                            name: '（4）VIK',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-'
                          },
                          {
                            key: 171,
                            name: '（5）其他',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-'
                          }
                        ]
                      },
                      {
                        key: 172,
                        name: '3、一次性费用',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-',
                        children: [
                          {
                            key: 173,
                            name: '（1）VIK',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-'
                          },
                          {
                            key: 174,
                            name: '（2）其他',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-'
                          }
                        ]
                      }
                    ]
                  },
                  {
                    key: 175,
                    name: '（二）增值业务',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-',
                    children: [
                      {
                        key: 176,
                        name: '1、语音VPN',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      },
                      {
                        key: 177,
                        name: '2、短信',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      },
                      {
                        key: 178,
                        name: '3、被叫集中付费业务',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      },
                      {
                        key: 179,
                        name: '4、400业务',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      },
                      {
                        key: 180,
                        name: '5、呼叫中心外包服务',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      },
                      {
                        key: 181,
                        name: '6、企业统一热线',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      },
                      {
                        key: 182,
                        name: '7、个性化回铃音',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      },
                      {
                        key: 183,
                        name: '8、电话会议',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      },
                      {
                        key: 184,
                        name: '9、视频会议',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      },
                      {
                        key: 185,
                        name: '10、固网电子支付',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      },
                      {
                        key: 186,
                        name: '11、信息导航',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-',
                        children: [
                          {
                            key: 187,
                            name: '（1）通信助理',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-'
                          },
                          {
                            key: 188,
                            name: '（2）电子商务',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-'
                          },
                          {
                            key: 189,
                            name: '（3）行业信息',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-'
                          },
                          {
                            key: 190,
                            name: '（4）信息经营',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-'
                          },
                          {
                            key: 191,
                            name: '（5）声讯',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-'
                          },
                          {
                            key: 192,
                            name: '（6）其他',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-'
                          }
                        ]
                      },
                      {
                        key: 193,
                        name: '12、电话广告',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      },
                      {
                        key: 194,
                        name: '13、黄页广告',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      },
                      {
                        key: 195,
                        name: '14、来电显示',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      },
                      {
                        key: 196,
                        name: '15、商务交易',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      },
                      {
                        key: 197,
                        name: '16、融合应用',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      },
                      {
                        key: 198,
                        name: '17、安防应用',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      },
                      {
                        key: 199,
                        name: '18、一次性费用',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-',
                        children: [
                          {
                            key: 200,
                            name: '（1）VIK',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-'
                          },
                          {
                            key: 201,
                            name: '（2）其他',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-'
                          }
                        ]
                      },
                      {
                        key: 202,
                        name: '19、云讯通',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      },
                      {
                        key: 203,
                        name: '20、VIK',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-',
                        children: [
                          {
                            key: 204,
                            name: '（1）传统业务',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-'
                          },
                          {
                            key: 205,
                            name: '（2）创新业务',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-'
                          }
                        ]
                      },
                      {
                        key: 206,
                        name: '21、其他',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      }
                    ]
                  }
                ]
              },
              {
                key: 207,
                name: '七、无线市话',
                row: '',
                mNumber: '-',
                yNumber: '-',
                lastYear: '-',
                children: [
                  {
                    key: 208,
                    name: '（一）基础语音业务',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-',
                    children: [
                      {
                        key: 209,
                        name: '1、月租费',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      },
                      {
                        key: 210,
                        name: '2、通话费',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-',
                        children: [
                          {
                            key: 211,
                            name: '（1）本地通话费',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-'
                          },
                          {
                            key: 212,
                            name: '（2）长途通话费',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-',
                            children: [
                              {
                                key: 213,
                                name: 'a、国内',
                                row: '',
                                mNumber: '-',
                                yNumber: '-',
                                lastYear: '-'
                              },
                              {
                                key: 214,
                                name: 'b、国际',
                                row: '',
                                mNumber: '-',
                                yNumber: '-',
                                lastYear: '-'
                              },
                              {
                                key: 215,
                                name: 'c、台港澳',
                                row: '',
                                mNumber: '-',
                                yNumber: '-',
                                lastYear: '-'
                              }
                            ]
                          }
                        ]
                      },
                      {
                        key: 216,
                        name: '3、一次性费用',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      },
                      {
                        key: 217,
                        name: '4、其他',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      }
                    ]
                  },
                  {
                    key: 218,
                    name: '（二）增值业务',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-',
                    children: [
                      {
                        key: 219,
                        name: '1、短信',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      },
                      {
                        key: 220,
                        name: '2、个性化回铃音',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      },
                      {
                        key: 221,
                        name: '3、信息导航',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-',
                        children: [
                          {
                            key: 222,
                            name: '（1）通信助理',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-'
                          },
                          {
                            key: 223,
                            name: '（2）电子商务',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-'
                          },
                          {
                            key: 224,
                            name: '（3）行业信息',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-'
                          },
                          {
                            key: 225,
                            name: '（4）信息经营',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-'
                          },
                          {
                            key: 226,
                            name: '（5）声讯',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-'
                          },
                          {
                            key: 227,
                            name: '（6）其他',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-'
                          }
                        ]
                      },
                      {
                        key: 228,
                        name: '4、来电显示',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      },
                      {
                        key: 229,
                        name: '5、一次性费用',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      },
                      {
                        key: 230,
                        name: '6、其他',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      }
                    ]
                  }
                ]
              },
              {
                key: 231,
                name: '八、公话',
                row: '',
                mNumber: '-',
                yNumber: '-',
                lastYear: '-',
                children: [
                  {
                    key: 232,
                    name: '（一）月租费',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-'
                  },
                  {
                    key: 233,
                    name: '（二）通话费',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-',
                    children: [
                      {
                        key: 234,
                        name: '1、本地通话费',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      },
                      {
                        key: 235,
                        name: '2、长途通话费',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-',
                        children: [
                          {
                            key: 236,
                            name: '（1）国内',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-'
                          },
                          {
                            key: 237,
                            name: '（2）国际',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-'
                          },
                          {
                            key: 238,
                            name: '（3）台港澳',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-'
                          }
                        ]
                      }
                    ]
                  },
                  {
                    key: 239,
                    name: '（三）装移机费',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-'
                  },
                  {
                    key: 240,
                    name: '（四）一次性费用',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-'
                  },
                  {
                    key: 241,
                    name: '（五）其他',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-'
                  }
                ]
              },
              {
                key: 242,
                name: '九、电话卡',
                row: '',
                mNumber: '-',
                yNumber: '-',
                lastYear: '-',
                children: [
                  {
                    key: 243,
                    name: '（一）通话费',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-',
                    children: [
                      {
                        key: 244,
                        name: '1、本地通话费',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      },
                      {
                        key: 245,
                        name: '2、长途通话费',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-',
                        children: [
                          {
                            key: 246,
                            name: '（1）国内',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-'
                          },
                          {
                            key: 247,
                            name: '（2）国际',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-'
                          },
                          {
                            key: 248,
                            name: '（3）台港澳',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-'
                          }
                        ]
                      },
                      {
                        key: 249,
                        name: '3、VIK',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      }
                    ]
                  },
                  {
                    key: 250,
                    name: '（二）其他',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-'
                  }
                ]
              },
              {
                key: 251,
                name: '十、他网用户主叫直拨业务',
                row: '',
                mNumber: '-',
                yNumber: '-',
                lastYear: '-',
                children: [
                  {
                    key: 252,
                    name: '（一）通话费',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-',
                    children: [
                      {
                        key: 253,
                        name: '1、长途通话费',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-',
                        children: [
                          {
                            key: 254,
                            name: '（1）国内',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-'
                          },
                          {
                            key: 255,
                            name: '（2）国际',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-'
                          },
                          {
                            key: 256,
                            name: '（3）台港澳',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-'
                          }
                        ]
                      }
                    ]
                  },
                  {
                    key: 257,
                    name: '（二）VIK',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-'
                  },
                  {
                    key: 258,
                    name: '（三）其他',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-'
                  }
                ]
              },
              {
                key: 259,
                name: '十一、数据及网元业务',
                row: '',
                mNumber: '-',
                yNumber: '-',
                lastYear: '-',
                children: [
                  {
                    key: 260,
                    name: '（一）网元出租业务',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-',
                    children: [
                      {
                        key: 261,
                        name: '1、网元出租',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-',
                        children: [
                          {
                            key: 262,
                            name: '（1）VIK',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-'
                          },
                          {
                            key: 263,
                            name: '（2）其他',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-'
                          }
                        ]
                      },
                      {
                        key: 264,
                        name: '2、共建共享网元租赁',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-',
                        children: [
                          {
                            key: 265,
                            name: '（1）基站',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-'
                          },
                          {
                            key: 266,
                            name: '（2）铁塔',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-'
                          },
                          {
                            key: 267,
                            name: '（3）室分系统',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-'
                          },
                          {
                            key: 268,
                            name: '（4）杆路',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-'
                          },
                          {
                            key: 269,
                            name: '（5）传输线路',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-'
                          },
                          {
                            key: 270,
                            name: '（6）管道',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-'
                          },
                          {
                            key: 271,
                            name: '（7）网络服务能力',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-'
                          }
                        ]
                      },
                      {
                        key: 272,
                        name: '3、一次性费用',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-',
                        children: [
                          {
                            key: 273,
                            name: '（1）其他',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-'
                          },
                          {
                            key: 274,
                            name: '（2）VIK',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-'
                          }
                        ]
                      },
                      {
                        key: 275,
                        name: '4、其他',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      }
                    ]
                  },
                  {
                    key: 276,
                    name: '（二）电路出租业务',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-',
                    children: [
                      {
                        key: 277,
                        name: '1、电路专线',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-',
                        children: [
                          {
                            key: 278,
                            name: '（1）DDN',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-'
                          },
                          {
                            key: 279,
                            name: '（2）FR',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-'
                          },
                          {
                            key: 280,
                            name: '（3）ATM',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-'
                          },
                          {
                            key: 281,
                            name: '（4）分组交换',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-'
                          },
                          {
                            key: 282,
                            name: '（5）SDH(数字电路)',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-'
                          },
                          {
                            key: 283,
                            name: '（6）以太网专线（MSTP）',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-'
                          },
                          {
                            key: 284,
                            name: '（7）其他',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-'
                          }
                        ]
                      },
                      {
                        key: 285,
                        name: '2、一次性费用',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-',
                        children: [
                          {
                            key: 286,
                            name: '（1）VIK',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-'
                          },
                          {
                            key: 287,
                            name: '（2）其他',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-'
                          }
                        ]
                      },
                      {
                        key: 288,
                        name: '3、VIK',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      },
                      {
                        key: 289,
                        name: '4、其他',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      }
                    ]
                  },
                  {
                    key: 290,
                    name: '（三）数据VPN',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-',
                    children: [
                      {
                        key: 291,
                        name: '1、其他',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      },
                      {
                        key: 292,
                        name: '2、一次性费用',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-',
                        children: [
                          {
                            key: 293,
                            name: '（1）VIK',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-'
                          },
                          {
                            key: 294,
                            name: '（2）其他',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-'
                          }
                        ]
                      },
                      {
                        key: 295,
                        name: '3、VIK',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      }
                    ]
                  },
                  {
                    key: 296,
                    name: '（四）共享业务',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-',
                    children: [
                      {
                        key: 297,
                        name: '1、机房及配套资源',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      },
                      {
                        key: 298,
                        name: '2、传输线路资源',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      },
                      {
                        key: 299,
                        name: '3、基站资源',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      },
                      {
                        key: 300,
                        name: '4、室分资源',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      },
                      {
                        key: 301,
                        name: '5、应急通信资源',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      },
                      {
                        key: 302,
                        name: '6、其他',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      }
                    ]
                  }
                ]
              },
              {
                key: 303,
                name: '十二、互联网业务',
                row: '',
                mNumber: '-',
                yNumber: '-',
                lastYear: '-',
                children: [
                  {
                    key: 304,
                    name: '（一）互联网接入业务',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-',
                    children: [
                      {
                        key: 305,
                        name: '1、宽带接入业务',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-',
                        children: [
                          {
                            key: 306,
                            name: '（1）有线终端接入',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-'
                          },
                          {
                            key: 307,
                            name: '（2）互联网专线',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-'
                          },
                          {
                            key: 308,
                            name: '（3）有线账号接入',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-'
                          },
                          {
                            key: 309,
                            name: '（4）VIK',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-'
                          }
                        ]
                      },
                      {
                        key: 310,
                        name: '2、窄带拨号接入业务',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      },
                      {
                        key: 311,
                        name: '3、互联网上网卡业务',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      },
                      {
                        key: 312,
                        name: '4、国际互联网穿透（国际IP-transit）业务',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      },
                      {
                        key: 313,
                        name: '5、国际互联网漫游IP Roaming业务',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      },
                      {
                        key: 314,
                        name: '6、一次性费用',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-',
                        children: [
                          {
                            key: 315,
                            name: '（1）其他',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-'
                          },
                          {
                            key: 316,
                            name: '（3）VIK',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-'
                          },
                          {
                            key: 317,
                            name: '（4）智慧到家',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-'
                          },
                          {
                            key: 318,
                            name: '（5）沃家神眼',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-'
                          },
                          {
                            key: 319,
                            name: '（6）沃家固话',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-'
                          }
                        ]
                      },
                      {
                        key: 320,
                        name: '7、其他互联网接入业务',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-',
                        children: [
                          {
                            key: 321,
                            name: '（1）其他',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-'
                          },
                          {
                            key: 322,
                            name: '（2）VIK',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-'
                          }
                        ]
                      }
                    ]
                  },
                  {
                    key: 323,
                    name: '（二）互联网增值业务',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-',
                    children: [
                      {
                        key: 324,
                        name: '1、IDC基础',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      },
                      {
                        key: 325,
                        name: '2、IDC端口通信费',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      },
                      {
                        key: 326,
                        name: '3、IDC增值',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      },
                      {
                        key: 327,
                        name: '4、IDC- VIK',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      },
                      {
                        key: 328,
                        name: '5、CDN',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-',
                        children: [
                          {
                            key: 329,
                            name: '（1）CDN基础',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-'
                          },
                          {
                            key: 330,
                            name: '（2）CDN增值',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-'
                          }
                        ]
                      },
                      {
                        key: 331,
                        name: '6、宽带内容',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-',
                        children: [
                          {
                            key: 332,
                            name: '（1）沃阅读',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-'
                          },
                          {
                            key: 333,
                            name: '（2）其他',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-'
                          }
                        ]
                      },
                      {
                        key: 334,
                        name: '7、宽带应用',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      },
                      {
                        key: 335,
                        name: '8、网络安全',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-',
                        children: [
                          {
                            key: 336,
                            name: '（1）数据存储及密保等',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-'
                          },
                          {
                            key: 337,
                            name: '（2）其他',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-'
                          }
                        ]
                      },
                      {
                        key: 338,
                        name: '9、宽视界',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      },
                      {
                        key: 339,
                        name: '10、宽视界-神眼',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      },
                      {
                        key: 340,
                        name: '11、IPTV',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      },
                      {
                        key: 341,
                        name: '12、视频智能精品网',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      },
                      {
                        key: 342,
                        name: '13、信息化应用',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      },
                      {
                        key: 343,
                        name: '14、黄页广告',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      },
                      {
                        key: 344,
                        name: '15、网络媒体广告',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      },
                      {
                        key: 345,
                        name: '16、可视电话',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      },
                      {
                        key: 346,
                        name: '17、互联网电视',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      },
                      {
                        key: 347,
                        name: '18、TV增值',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      },
                      {
                        key: 348,
                        name: '19、融合应用',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      },
                      {
                        key: 349,
                        name: '20、视频会议',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      },
                      {
                        key: 350,
                        name: '21、商务交易',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      },
                      {
                        key: 351,
                        name: '22、安防应用',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      },
                      {
                        key: 352,
                        name: '23、融合信息服务',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      },
                      {
                        key: 353,
                        name: '24、智慧家庭',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-',
                        children: [
                          {
                            key: 354,
                            name: 'a、沃家固话',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-'
                          },
                          {
                            key: 355,
                            name: 'b、智慧到家',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-'
                          },
                          {
                            key: 356,
                            name: 'c、沃家神眼',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-'
                          }
                        ]
                      },
                      {
                        key: 357,
                        name: '24、一次性费用',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      },
                      {
                        key: 358,
                        name: '25、VIK',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      },
                      {
                        key: 359,
                        name: '26、其他',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      }
                    ]
                  },
                  {
                    key: 360,
                    name: '（三）云计算',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-',
                    children: [
                      {
                        key: 361,
                        name: '1、公有云',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      },
                      {
                        key: 362,
                        name: '2、云应用',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      },
                      {
                        key: 363,
                        name: '3、私有云',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-',
                        children: [
                          {
                            key: 364,
                            name: '（1）集成服务',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-'
                          },
                          {
                            key: 365,
                            name: '（2）工程服务',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-'
                          },
                          {
                            key: 366,
                            name: '（3）融资租赁',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-'
                          },
                          {
                            key: 367,
                            name: '（4）经营租赁',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-'
                          }
                        ]
                      },
                      {
                        key: 368,
                        name: '4、云服务',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      },
                      {
                        key: 369,
                        name: '5、云网一体',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      },
                      {
                        key: 370,
                        name: '6、VIK',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      }
                    ]
                  }
                ]
              },
              {
                key: 371,
                name: '十三、广告传媒业务',
                row: '',
                mNumber: '-',
                yNumber: '-',
                lastYear: '-',
                children: [
                  {
                    key: 372,
                    name: '（一）黄页广告',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-'
                  },
                  {
                    key: 373,
                    name: '（二）平面及户外媒体',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-'
                  },
                  {
                    key: 374,
                    name: '（三）其他',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-'
                  }
                ]
              },
              {
                key: 375,
                name: '十四、IT业务',
                row: '',
                mNumber: '-',
                yNumber: '-',
                lastYear: '-',
                children: [
                  {
                    key: 376,
                    name: '（一）系统集成服务',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-'
                  },
                  {
                    key: 377,
                    name: '（二）服务代维及外包',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-'
                  },
                  {
                    key: 378,
                    name: '（三）软件服务',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-'
                  },
                  {
                    key: 379,
                    name: '（四）专业服务',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-'
                  },
                  {
                    key: 380,
                    name: '（五）知识服务',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-'
                  },
                  {
                    key: 381,
                    name: '（六）其他服务',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-'
                  },
                  {
                    key: 382,
                    name: '（七）经营租赁',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-'
                  },
                  {
                    key: 383,
                    name: '（八）融资租赁',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-'
                  },
                  {
                    key: 384,
                    name: '（九）VIK',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-'
                  },
                  {
                    key: 385,
                    name: '（十）5G专网服务',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-'
                  }
                ]
              },
              {
                key: 386,
                name: '十五、网内网间结算',
                row: '',
                mNumber: '-',
                yNumber: '-',
                lastYear: '-',
                children: [
                  {
                    key: 387,
                    name: '（一）企业内网内结算',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-',
                    children: [
                      {
                        key: 388,
                        name: '1、同一专业省际结算',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-',
                        children: [
                          {
                            key: 389,
                            name: '（1）同一专业省际结算收入',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-'
                          },
                          {
                            key: 390,
                            name: '（2）同一专业省际结算支出',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-'
                          }
                        ]
                      },
                      {
                        key: 391,
                        name: '2、同一专业省内结算',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-',
                        children: [
                          {
                            key: 392,
                            name: '（1）同一专业省内结算收入',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-'
                          },
                          {
                            key: 393,
                            name: '（2）同一专业省内结算支出',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-'
                          }
                        ]
                      }
                    ]
                  },
                  {
                    key: 394,
                    name: '（二）企业内网间结算',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-',
                    children: [
                      {
                        key: 395,
                        name: '1、不同法人主体间结算收入',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      },
                      {
                        key: 396,
                        name: '2、同一法人主体内结算',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-',
                        children: [
                          {
                            key: 397,
                            name: '（1）同一法人主体内结算收入',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-'
                          },
                          {
                            key: 398,
                            name: '（2）同一法人主体内结算支出',
                            row: '',
                            mNumber: '-',
                            yNumber: '-',
                            lastYear: '-'
                          }
                        ]
                      }
                    ]
                  },
                  {
                    key: 399,
                    name: '（三）企业间网间结算收入',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-'
                  }
                ]
              },
              {
                key: 400,
                name: '十六、积分回馈',
                row: '',
                mNumber: '-',
                yNumber: '-',
                lastYear: '-'
              },
              {
                key: 401,
                name: '十七、用户权益赠送',
                row: '',
                mNumber: '-',
                yNumber: '-',
                lastYear: '-',
                children: [
                  {
                    key: 402,
                    name: '1、电子券',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-'
                  },
                  {
                    key: 403,
                    name: '2、其他用户权益',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-'
                  }
                ]
              },
              {
                key: 404,
                name: '十八、租赁收入',
                row: '',
                mNumber: '-',
                yNumber: '-',
                lastYear: '-',
                children: [
                  {
                    key: 405,
                    name: '1、直租',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-'
                  },
                  {
                    key: 406,
                    name: '2、售后回租',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-'
                  },
                  {
                    key: 407,
                    name: '3、经营租赁',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-'
                  }
                ]
              },
              {
                key: 408,
                name: '十九、保理收入',
                row: '',
                mNumber: '-',
                yNumber: '-',
                lastYear: '-'
              },
              {
                key: 409,
                name: '二十、SP等合作分成支出',
                row: '',
                mNumber: '-',
                yNumber: '-',
                lastYear: '-',
                children: [
                  {
                    key: 410,
                    name: '（一）基础业务',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-',
                    children: [
                      {
                        key: 411,
                        name: '1、传统业务',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      },
                      {
                        key: 412,
                        name: '2、创新业务',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      }
                    ]
                  },
                  {
                    key: 413,
                    name: '（二）增值业务',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-',
                    children: [
                      {
                        key: 414,
                        name: '1、传统业务',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      },
                      {
                        key: 415,
                        name: '2、创新业务',
                        row: '',
                        mNumber: '-',
                        yNumber: '-',
                        lastYear: '-'
                      }
                    ]
                  }
                ]
              },
              {
                key: 416,
                name: '二十一、其他主营业务',
                row: '',
                mNumber: '-',
                yNumber: '-',
                lastYear: '-',
                children: [
                  {
                    key: 417,
                    name: '（一）网络托管业务',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-'
                  },
                  {
                    key: 418,
                    name: '（二）技术服务业务',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-'
                  },
                  {
                    key: 419,
                    name: '（三）铁塔维护反包',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-'
                  },
                  {
                    key: 420,
                    name: '（四）VIK',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-'
                  },
                  {
                    key: 421,
                    name: '（五）其他',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-'
                  }
                ]
              },
              {
                key: 422,
                name: '二十二、公允价值法调整',
                row: '',
                mNumber: '-',
                yNumber: '-',
                lastYear: '-',
                children: [
                  {
                    key: 423,
                    name: '（一）存费送机',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-'
                  },
                  {
                    key: 424,
                    name: '（二）购机送费',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-'
                  },
                  {
                    key: 425,
                    name: '（三）合约惠机',
                    row: '',
                    mNumber: '-',
                    yNumber: '-',
                    lastYear: '-'
                  }
                ]
              },
              {
                key: 426,
                name: '二十三、补交合约款',
                row: '',
                mNumber: '-',
                yNumber: '-',
                lastYear: '-'
              }
            ]
          }, //父线
          {
            key: 4,
            name: '其他业务收入',
            row: 4,
            mNumber: '-',
            yNumber: '-',
            lastYear: '-'
          }
        ]
      },
      {
        key: 5,
        name: '△利息收入',
        row: 5,
        mNumber: '-',
        yNumber: '-',
        lastYear: '-'
      },
      {
        key: 6,
        name: '△手续费及佣金收入',
        row: 6,
        mNumber: '-',
        yNumber: '-',
        lastYear: '-'
      }
    ]
  },
  {
    key: 7,
    name: '二、减：营业总成本',
    row: 7,
    mNumber: '-',
    yNumber: '-',
    lastYear: '-',
    children: [
      {
        key: 8,
        name: '营业成本',
        row: 8,
        mNumber: '-',
        yNumber: '-',
        lastYear: '-',
        children: [
          {
            key: 9,
            name: '其中:主营业务成本',
            row: 9,
            mNumber: '-',
            yNumber: '-',
            lastYear: '-'
          },
          {
            key: 10,
            name: '其他业务支出',
            row: 10,
            mNumber: '-',
            yNumber: '-',
            lastYear: '-'
          }
        ]
      },
      {
        key: 11,
        name: '△利息支出',
        row: 11,
        mNumber: '-',
        yNumber: '-',
        lastYear: '-'
      },
      {
        key: 12,
        name: '△手续费及佣金支出',
        row: 12,
        mNumber: '-',
        yNumber: '-',
        lastYear: '-'
      },
      {
        key: 13,
        name: '税金及附加',
        row: 13,
        mNumber: '-',
        yNumber: '-',
        lastYear: '-'
      },
      {
        key: 14,
        name: '销售费用',
        row: 14,
        mNumber: '-',
        yNumber: '-',
        lastYear: '-'
      },
      {
        key: 15,
        name: '管理费用',
        row: 15,
        mNumber: '-',
        yNumber: '-',
        lastYear: '-'
      },
      {
        key: 16,
        name: '研发费用',
        row: 16,
        mNumber: '-',
        yNumber: '-',
        lastYear: '-'
      },
      {
        key: 17,
        name: '财务费用',
        row: 17,
        mNumber: '-',
        yNumber: '-',
        lastYear: '-'
      },
      {
        key: 18,
        name: '加：其他收益',
        row: 18,
        mNumber: '-',
        yNumber: '-',
        lastYear: '-'
      },
      {
        key: 19,
        name: '加：投资收益',
        row: 19,
        mNumber: '-',
        yNumber: '-',
        lastYear: '-'
      },
      {
        key: 20,
        name: '加：△汇兑收益',
        row: 20,
        mNumber: '-',
        yNumber: '-',
        lastYear: '-'
      },
      {
        key: 21,
        name: '加：公允价值变动净收益',
        row: 21,
        mNumber: '-',
        yNumber: '-',
        lastYear: '-'
      },
      {
        key: 22,
        name: '加：信用减值损失',
        row: 22,
        mNumber: '-',
        yNumber: '-',
        lastYear: '-'
      },
      {
        key: 23,
        name: '加：资产减值损失',
        row: 23,
        mNumber: '-',
        yNumber: '-',
        lastYear: '-'
      },
      {
        key: 24,
        name: '加：资产处置收益',
        row: 24,
        mNumber: '-',
        yNumber: '-',
        lastYear: '-'
      }
    ]
  },
  {
    key: 25,
    name: '三、营业利润',
    row: 25,
    mNumber: '-',
    yNumber: '-',
    lastYear: '-',
    children: [
      {
        key: 26,
        name: '加：营业外收入',
        row: 26,
        mNumber: '-',
        yNumber: '-',
        lastYear: '-'
      },
      {
        key: 27,
        name: '减：营业外支出',
        row: 27,
        mNumber: '-',
        yNumber: '-',
        lastYear: '-'
      }
    ]
  },

  {
    key: 28,
    name: '四、利润总额',
    row: 28,
    mNumber: '-',
    yNumber: '-',
    lastYear: '-',
    children: [
      {
        key: 29,
        name: '减：所得税费用',
        row: 29,
        mNumber: '-',
        yNumber: '-',
        lastYear: '-'
      }
    ]
  },
  {
    key: 30,
    name: '五、净利润',
    row: 30,
    mNumber: '-',
    yNumber: '-',
    lastYear: '-',
    children: [
      {
        key: 31,
        name: '归属于母公司普通股股东的净利润',
        row: 31,
        mNumber: '-',
        yNumber: '-',
        lastYear: '-'
      },
      {
        key: 32,
        name: '少数股东损益',
        row: 32,
        mNumber: '-',
        yNumber: '-',
        lastYear: '-'
      }
    ]
  }
];

// rowSelection objects indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      'selectedRows: ',
      selectedRows
    );
  },
  onSelect: (record, selected, selectedRows) => {
    console.log(record, selected, selectedRows);
  },
  onSelectAll: (selected, selectedRows, changeRows) => {
    console.log(selected, selectedRows, changeRows);
  }
};

function TreeData() {
  const [checkStrictly, setCheckStrictly] = React.useState(false);
  return (
    <>
      <Table columns={columns} dataSource={data} pagination={false} />
    </>
  );
}

ReactDOM.render(<TreeData />, document.getElementById('container'));
