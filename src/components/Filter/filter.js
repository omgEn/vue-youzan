const filter = [
  {
    panKey: 'demo1',
    options: [
      {
        label: '二级机构',
        type: 'FilterOrgan',
        model: 'deptCode',
      },
      {
        label: '三级机构',
        type: 'FilterInstitution3',
        model: 'deptCode3',
      },
      {
        label: '状态',
        type: 'FilterSelect',
        model: 'status',
        options: [
          {
            value: '选项1',
            label: '黄金糕',
          },
          {
            value: '选项2',
            label: '双皮奶',
          },
        ],
      },
    ],
  },
  {
    panKey: 'demo2',
    options: [{}],
  },
];

export default filter;
