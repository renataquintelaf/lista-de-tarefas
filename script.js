new Vue({
    el: "#app",
    data() {
        return {
            titulo: "Minha Lista de Tarefas",
            tarefas: [
            ],
            novatarefa: ''
        }
    },
    methods: {
        adicionarTarefa() {
            this.tarefas.push({
                titulo: this.novatarefa, checked: false
            })
            this.novatarefa = ''
        },
        limparTarefas() {
            this.tarefas = []
        },
    },
    computed: {
        todasTarefas() {
            return this.tarefas.length
        },
        tarefasCompletas() {
            return this.tarefas.filter(tarefa => tarefa.checked).length
        },
        tarefasIncompletas() {
            return this.tarefas.length - this.tarefas.filter(tarefa => tarefa.checked).length
        }
    }
})