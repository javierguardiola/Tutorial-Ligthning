/**
 * ToDoListItem component
 * Represents an item with some styling based on item status
 * @author Manish Choudhari
 */
import { LightningElement, api } from "lwc";

export default class ToDoListItem extends LightningElement {
  @api todoId;
  @api todoName;
  @api done = false;

  get containerClass() {
    return this.done ? "todo completed" : "todo upcoming";
  }
}
