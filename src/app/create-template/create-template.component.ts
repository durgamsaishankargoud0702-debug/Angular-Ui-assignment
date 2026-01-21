import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-create-template',
    standalone: true,
    imports: [CommonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule],
    templateUrl: './create-template.component.html',
    styleUrl: './create-template.component.css'
})
export class CreateTemplateComponent {
    templateForm: FormGroup;

    constructor(private fb: FormBuilder, private router: Router) {
        this.templateForm = this.fb.group({
            name: ['', Validators.required],
            description: ['', Validators.required]
        });
    }

    onSave() {
        if (this.templateForm.valid) {
            // Mock save
            console.log('Saved:', this.templateForm.value);
            this.router.navigate(['/templates']);
        }
    }

    onCancel() {
        this.router.navigate(['/templates']);
    }
}
