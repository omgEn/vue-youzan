### DragEvent

拖拽接口，继承 MouseEvent 和 Event 属性

#### Event

`event = new Event(typeArg,eventInit)`
typeArg: 要创建的事件名称
eventInit|可选对象，均默认 false

- "bubbles": 是否冒泡
- "cancelable": 该事件是否能被取消
- "composed": 指示事件是否会在影子 DOM 根节点之外触发侦听器。

#### MouseEvent

MouseEvent 派生自 UIEvent，UIEvent 派生自 Event

DragEvent 事件类型
`var str = "拖动元素或选择文本";`

- drag
  `${str}`触发
- dragstart
  开始`${str}`时触发
- dragend
  当拖动结束时触发(释放鼠标或按下退出键盘)
- dragenter
  当`${srt}` 到有效的放置位置时候触发
- dragexit
  当元素不再是拖动操作的选择目标时触发此事件。
- dragleve
  当`${str}` 离开有效的防止位置时，触发。
- dragover
- drop
  当在有效位置目标`${str}`时触发

### vue 拖拽组件

#### vuedraggable

#### vue-dragging
