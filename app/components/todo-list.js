import Component from '@glimmer/component';
import { action } from '@ember/object';
import { TrackedArray, tracked } from 'tracked-built-ins';
import moment from 'moment';

export default class TodoList extends Component {
  @tracked todoLists = new TrackedArray([]);
  @tracked temp = '';
  @tracked elemToRemove;
  deletedItem = new TrackedArray([]);
  selectedItem = new TrackedArray([]);
  @tracked itemClicked = false;
  @tracked todoItemSelected;
  @tracked today = moment();
  @tracked showModal = true;
  @tracked isReminderOpen = false;

  @action
  closeModal() {
    this.showModal = false;
  }

  @action
  onRemindBtnClick(){
    console.log("Im called from onRemindBtnClick");
    this.isReminderOpen = true;
  }

  @action
  onAddClick() {
    this.todoLists.push(this.temp);
    this.temp = '';
  }

  @action
  onDeleteClick(index) {
    this.deletedItem.push(index);
    // this.elemToRemove = this.todoLists[index];
    // this.todoLists = this.todoLists.filter((_, i) => i !== index);
  }

  @action
  onItemClick(index, item) {
    console.log(index, 'index is printed here');
    console.log(item, 'item is printed here');
    this.todoItemSelected = item;
    this.selectedItem.push(index);
    this.itemClicked = true;
    console.log('Im called from onItemClick');
  }

  @action
  onAddingElements(event) {
    this.temp = event.target.value;
  }
}
