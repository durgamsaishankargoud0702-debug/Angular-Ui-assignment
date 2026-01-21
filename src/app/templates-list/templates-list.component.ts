import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

interface Template {
    id: number;
    name: string;
    description: string;
    lastEdited: Date;
}

@Component({
    selector: 'app-templates-list',
    standalone: true,
    imports: [CommonModule, MatCardModule, MatButtonModule],
    templateUrl: './templates-list.component.html',
    styleUrl: './templates-list.component.css'
})
export class TemplatesListComponent {
    templates: Template[] = [
        { id: 1, name: 'Marketing Email', description: 'Template for weekly newsletters', lastEdited: new Date('2023-10-01') },
        { id: 2, name: 'Project Proposal', description: 'Standard proposal format', lastEdited: new Date('2023-10-05') },
        { id: 3, name: 'Meeting Minutes', description: 'Team sync summary', lastEdited: new Date('2023-10-10') },
        { id: 4, name: 'Bug Report', description: 'Jira ticket template', lastEdited: new Date('2023-10-12') }
    ];

    constructor(private router: Router) { }

    createNew() {
        this.router.navigate(['/templates/create']);
    }

    editTemplate(id: number) {
        this.router.navigate(['/templates/edit', id]);
    }
}
