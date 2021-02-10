import { Injectable } from '@nestjs/common';
import { CourseDetails } from './courseDetails.dto';

@Injectable()
export class CoursesService {

    courses:CourseDetails;

    

addCourse (data : CourseDetails){
    this.courses=data
    console.log(this.courses)  
    return `data stored in database `;
}


getCourse(){
    return this.courses
}

}
