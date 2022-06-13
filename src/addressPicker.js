export function createAddressPicker(element, options) {
  return new AddressPicker(element, options);
}

// todo 实现省市区三级联动, 具体参考 README.md#模块说明
class AddressPicker {
  // 构造函数
  constructor(element, options) {}

  // 更新选择值
  update(options) {}

  // 更新单个选择值
  updateByKey(key, value) {}

  // 传参时获取选择值, 不传参时获取所有选择值
  getValue(key) {}

  // 重置回初始化之后的状态
  reset() {}
}
