import { Pipe, PipeTransform } from '@angular/core';
import 'rxjs/add/operator/map';
import { Project } from '../_models/project';

@Pipe({
	name: 'sites'
})

export class ProjectPipe implements PipeTransform {
	transform(projects: Project[]) {
		return projects.filter(project => project.project_type === 'Site');
	}
}