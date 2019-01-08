import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '@gh/api';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const DEFAULT_LIMIT = 10;
const DEFAULT_TIMEOUT = 60;

@Component({
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsComponent implements OnInit {
  form: FormGroup;
  categories$: Observable<Category[]>;
  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {
    this.categories$ = this.route.data.pipe(
      map((data: { categories: Category[] }) => data.categories)
    );
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      categoryId: [null, [Validators.required]],
      limit: [DEFAULT_LIMIT],
      timeout: [DEFAULT_TIMEOUT]
    });
  }

  submit() {
    if (this.form.valid) {
      this.router.navigate(['/games', 'alias', 'play'], {
        queryParams: this.form.value
      });
    }
  }
}
