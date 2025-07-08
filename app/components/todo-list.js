import Component from '@glimmer/component';
import { action, get } from '@ember/object';
import { TrackedArray, TrackedObject, tracked } from 'tracked-built-ins';
import moment from 'moment';

export default class TodoList extends Component {
  @tracked todoLists = new TrackedArray([]);
  @tracked subTasks = new TrackedArray([]);
  @tracked temp = '';
  @tracked subItem = '';
  @tracked elemToRemove;
  @tracked deletedItems = new TrackedArray([]);
  deletedSubItems = new TrackedArray([]);
  @tracked todoItemSelected;
  @tracked subItemSelected;
  @tracked selectedDate = moment();
  @tracked isReminderOpen = false;
  @tracked selectedItemIndex;
  @tracked selectedSubItemIndex;
  @tracked deletedItem;
  @tracked deletedSubItem;
  @tracked todoItemFirstDeleted;
  @tracked itemContents = new TrackedObject({});
  @tracked notes = new TrackedObject({});
  @tracked note;

  @tracked currentTime = moment().format('YYYY-MM-DD HH:mm').split(' ');

  @action
  onRemindBtnClick() {
    this.isReminderOpen = true;
  }

  @action
  handleOnSelect({ date }) {
    this.selectedDate = date;
  }

  @action
  isDisabled(date) {
    console.log(date, 'date is printed');
    return moment(date).isBefore(moment(), 'day');
  }

  @action
  onAddClick() {
    console.log(this.today, 'this.today is printed');
    console.log(this.currentTime, 'currentTime');
    this.todoLists.push(this.temp);
    this.temp = '';
    if (this.todoLists.length === 1) {
      this.selectedItemIndex = 0;
      this.subItemSelected = this.todoLists[0];
    }
  }

  @action
  handleAddKeyPress(event) {
    if (event.key === 'Enter') {
      this.onAddClick();
    }
  }

  @action
  onSubItemInput(event) {
    this.subItem = event.target.value;
  }

  @action
  handleKeyPress(event) {
    if (event.key === 'Enter') {
      if (this.selectedItemIndex in this.itemContents) {
        this.itemContents[this.selectedItemIndex].push(this.subItem);
      } else {
        let tempSubArrayItems = new TrackedArray([]);
        tempSubArrayItems.push(this.subItem);
        this.itemContents[this.selectedItemIndex] = tempSubArrayItems;
      }
      this.subItem = '';
    }

    if (this.selectedSubItems?.length === 1) {
      this.selectedSubItemIndex = 0;
      this.subItemSelected = this.selectedSubItems[0];
    }
  }

  @action
  onDeleteClick() {
    // if (this.selectedItemIndex) {
    this.deletedItems.push(this.selectedItemIndex);
    this.deletedItem = this.todoLists[this.selectedItemIndex];
    // } else {
    //   this.todoItemFirstDeleted = this.todoLists[0];
    //   this.deletedItems.push(this.todoItemFirstDeleted);
    //   this.deletedItem = this.todoItemFirstDeleted;
    // }
    // this.elemToRemove = this.todoLists[index];
    // this.todoLists = this.todoLists.filter((_, i) => i !== index);
  }

  @action
  onSubItemDeleteClick(index, item) {
    this.subItemSelected = item;
    this.selectedSubItemIndex = index;
    this.deletedSubItems.push(this.selectedSubItemIndex);
    let abc = this.itemContents[this.selectedItemIndex];
    this.deletedSubItem = abc[this.selectedSubItemIndex];
    // abc.splice(this.selectedItemIndex, 1);
  }

  @action
  onItemClick(index, item) {
    this.todoItemSelected = item;
    this.selectedItemIndex = index;
  }

  @action
  onAddingElements(event) {
    this.temp = event.target.value;
  }

  @action
  updateNotes(event) {
    this.note = event.target.value;
    this.notes[this.selectedItemIndex] = this.note;
    this.note = '';
  }
}
