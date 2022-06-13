# 地址选择器

## 准备工作

1. 安装依赖: `yarn install`
2. 启动开发服务: `yarn run dev`

## 项目结构

```bash
/fe-address-picker
├── README.md  # 项目说明
├── docs
├── favicon.svg
├── index.html  # 入口 html 文件
├── main.js # 入口 js 文件
├── package.json
├── src
│   ├── addressPicker.js # 组件文件
│   ├── data.json # 地址数据
│   ├── images # 图片文件
│   └── style.css # 样式文件
└── yarn.lock
```

## 需求说明

***⚠️本练习主要以 JS 为主, 可以使用 jQuery 库作为辅助, CSS 样式可以不用花费太多时间***

实现一个省/市/区三级联动的地址选择器，当选择省时动态加载所属市, 选择市时动态加载所属区县, 具体规则如下：

- 无默认值初始化地址选择器时，显示 `placeholder` 文本:

  ```js
  createAddressPicker('#address-picker');
  ```

  ![示意图](./docs/images/no-default-value.png)

- 有默认值初始化地址选择器，显示默认值:

  ```js
  // 带默认值初始化
  const addressPicker = createAddressPicker('#address-picker', {
    province: '江苏省',
    city: '南京市',
    district: '江宁区',
  });
  ```

  ![示意图](./docs/images/default-value.png)

## 模块说明

- AddressPicker 类

  ```ts
  // options 配置项
  interface IOptions {
    province?: string;
    city?: string;
    district?: string;
  }

  // 根据类型获取对应的数据
  type IKey = 'province' | 'city' | 'district';

  // AddressPicker 类
  class AddressPicker {
    constructor(element: string, options?: IOptions); // 构造函数
    update(options: Options): void; // 更新选择值
    updateByKey(key: IKey, value: string): void; // 更新单个选择值
    getValue(key?: IKey): string | IOptions; // 传参时获取选择值, 不传参时获取所有选择值
    reset(): void;
  }
  ```

- 示例

  ```js
  // 初始化
  const addressPicker = createAddressPicker('#address-picker', {
    province: '江苏省',
    city: '南京市',
    district: '江宁区',
  });

  addressPicker.getValue(); // {province: '江苏省', city: '南京市', district: '江宁区'}
  addressPicker.getValue('district'); // '江宁区'

  // 更新选择值
  addressPicker.update({
    province: '江苏省',
    city: '南京市',
    district: '鼓楼区',
  });

  addressPicker.getValue('district'); // '鼓楼区'
  ```
