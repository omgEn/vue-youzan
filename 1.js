class XArray {
  constructor(previesArray) {
    this.arrayList = previesArray;
    this.length = this.arrayList.length;
  }
  getArrayPush(...x) {
    for (let i = 0; i < x.length; i++) {
      this.arrayList[this.length] = x[i];
    }
    this.length = this.arrayList.length;
    return this.arrayList;
  }
  getArraySplice(x, y, ...z) {
    const deleteArray = [];
    const AfterDeleteArray = [];
    if (!x && typeof x != 'number' && typeof y != 'number') {
      return;
    }
    x < 0 ? (x = 0) : x;
    y < 0 ? (y = 0) : y;
    if (z && z.length > 0) {
      return this.getDeleteArray(x, y, z, deleteArray, AfterDeleteArray);
    } else {
      return this.getDeleteArray(x, y, z, deleteArray, AfterDeleteArray);
    }
  }
  getDeleteArray(x, y, z = [], deleteArray, AfterDeleteArray) {
    for (let i = x; i < x + y; i++) {
      deleteArray[deleteArray.length] = this.arrayList[i];
    }
    for (let i = 0; i < x; i++) {
      AfterDeleteArray[AfterDeleteArray.length] = this.arrayList[i];
    }
    z.map((item, idx) => {
      AfterDeleteArray[AfterDeleteArray.length] = item;
    });
    for (let i = x + y; i < this.arrayList.length; i++) {
      AfterDeleteArray[AfterDeleteArray.length] = this.arrayList[i];
    }
    this.length = AfterDeleteArray.length;
    this.arrayList = AfterDeleteArray;
    return deleteArray;
  }
}
var arr = [1, 2, 3];
var arrayObj = new XArray(arr);
var testPush = arrayObj.getArraySplice(2, 1, 4);
console.log(arrayObj);
console.log(testPush);
