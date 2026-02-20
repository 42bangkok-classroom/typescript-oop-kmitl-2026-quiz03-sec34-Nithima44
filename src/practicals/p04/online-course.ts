export class OnlineCourse {
    public courseName?: string;
    public maxStudents?: number;
    private enrolledStudents: number = 0;
    private isOpen: boolean=true;

    constructor(courseName?: string, maxStudents?: number, isOpen?: boolean) {
        this.courseName = courseName;
        this.maxStudents = maxStudents;
        if (isOpen !== undefined) {
            this.isOpen = isOpen;
        }
    }
    enroll(): boolean{
        if (this.isOpen && this.enrolledStudents < (this.maxStudents ?? 0)) {
            this.enrolledStudents++;
            return true;
        }
        return false;
    }
    closeCourse() : void {
        this.isOpen = false;
    }
    getAvailableSeats(): number {
        return (this.maxStudents ?? 0) - this.enrolledStudents;
    }
    getCourseStatus(): string {
        return this.isOpen ? "Open" : "Closed";
    }
    private canEnroll(): boolean {
        return this.isOpen && this.enrolledStudents < (this.maxStudents ?? 0);
    }
}
