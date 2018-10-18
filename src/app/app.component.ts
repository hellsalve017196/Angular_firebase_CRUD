import {Component, OnInit} from '@angular/core';
import {map} from 'rxjs/operators';
import {AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  itemVal = '';
  listOfitems: any;

  constructor(public db: AngularFireDatabase) {
  }

  onGetlist() {
    this.db
      .list('items')
      .snapshotChanges()
      .pipe(
        map(
          changes =>
            changes.map(c => ({key: c.payload.key, ...c.payload.val()}))
        )
      )
      .subscribe(
        items => {
          this.listOfitems = items;
        }
      );
  }

  onModifiy(contentDom, inputDom) {
    contentDom.style.display = 'none';
    inputDom.style.display = 'block';
  }

  onSumbit() {
    this.db.list('/items').push({content: this.itemVal});
    this.itemVal = '';
  }

  onDelete(key) {
    this.db.list('/items').remove(key.toString()).then(_ => console.log('item deleted'));
  }

  onEdit(key, input, content) {
    this.db.list('/items').update(key, {'content': input.value}).then(_ => console.log('item updated'), err => console.log(err));
    input.style.display = 'none';
    content.style.display = 'block';
  }

  ngOnInit() {
    this.onGetlist();
  }


}
