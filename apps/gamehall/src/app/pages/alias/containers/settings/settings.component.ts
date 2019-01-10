import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '@gh/api';
import { BaseFormComponent } from '@gh/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

import { AliasSettingsService } from '../../services';

const DEFAULT_LIMIT = 10;
const DEFAULT_TIMEOUT = 60;

@Component({
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsComponent extends BaseFormComponent implements OnInit {
  form: FormGroup;
  categories$: Observable<Category[]>;

  constructor(
    private readonly fb: FormBuilder,
    private readonly route: ActivatedRoute,
    private readonly aliasSettingsService: AliasSettingsService,
    private readonly router: Router
  ) {
    super();
    this.categories$ = this.route.data.pipe(pluck('categories'));
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

  onSubmit() {
    this.aliasSettingsService.setSettings(this.form.value);
    this.router.navigateByUrl('/games/alias/play');
  }
}
