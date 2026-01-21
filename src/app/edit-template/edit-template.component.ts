import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-edit-template',
    standalone: true,
    imports: [CommonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule],
    templateUrl: './edit-template.component.html',
    styleUrl: './edit-template.component.css'
})
export class EditTemplateComponent implements OnInit {
    templateForm: FormGroup;
    id: number | null = null;

    constructor(
        private fb: FormBuilder,
        private route: ActivatedRoute,
        private router: Router
    ) {
        this.templateForm = this.fb.group({
            name: ['', Validators.required],
            description: ['', Validators.required]
        });
    }

    ngOnInit() {
        this.id = Number(this.route.snapshot.paramMap.get('id'));
        // Mock fetch data
        if (this.id) {
            this.templateForm.patchValue({
                name: `Template ${this.id}`,
                description: 'Existing description for template...'
            });
        }
    }

    onSave() {
        if (this.templateForm.valid) {
            console.log('Updated:', { id: this.id, ...this.templateForm.value });
            this.router.navigate(['/templates']);
        }
    }

    onCancel() {
        this.router.navigate(['/templates']);
    }
}
