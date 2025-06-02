import Component from '@glimmer/component';
import { action } from '@ember/object';
import { TrackedArray, tracked } from 'tracked-built-ins';

export default class TodoList extends Component {
  @tracked todoLists = new TrackedArray([]);
  @tracked temp = '';
  @tracked elemToRemove;
  @tracked deletedItem;

  @action
  onAddClick() {
    this.todoLists.push(this.temp);
    this.temp = '';
  }

  @action
  onDeleteClick(index) {
    this.deletedItem = index;
    // this.elemToRemove = this.todoLists[index];
    // this.todoLists = this.todoLists.filter((_, i) => i !== index);
  }

  @action
  onAddingElements(event) {
    this.temp = event.target.value;
  }
}
