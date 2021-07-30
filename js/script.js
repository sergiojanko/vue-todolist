const app = new Vue ({
    el: "#app",
    data: {
        tasks: ["Lavare l'auto","Fare benzina","Fare la spesa"],
        newTask: "",
    },
    methods: {
        removeTask(i){
            this.tasks.splice(i,1);
        },
        addTask() {
            if (this.newTask.trim()) this.tasks.push(this.newTask);
            this.newTask = "";
        }
    }
});