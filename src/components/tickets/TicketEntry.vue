<template>
    <div class="ticket">
        <div class="ticket__header" @click.self="expand">
            <div class="ticket_header--title">
                <svg-icon v-if="timePast === 1" class="icon icon__success" name="clock"></svg-icon>
                <svg-icon v-if="timePast === 2" class="icon icon__warning" name="warning"></svg-icon>
                <svg-icon v-if="timePast === 3" class="icon icon__danger" name="danger"></svg-icon>
                <div class="ticket_header--title-head">{{ ticket.store.name }}</div>
            </div>
            <div class="ticket_header--actions">
                <button class="ticket_header--actions-btn" @click="done(ticket.uid)">
                    <svg-icon class="ticket_header--actions-icon success" name="check"></svg-icon>
                </button>
                <button class="ticket_header--actions-btn" @click="editTicket(ticket)">
                    <svg-icon class="ticket_header--actions-icon edit" name="edit"></svg-icon>
                </button>
            </div>
        </div>
        <div class="ticket__body" v-if="collapse">
            <div class="ticket__body--info">
                <div class="ticket__body--info-date ticket__body--entry">
                    <label for="created">Ημερομηνία:</label>
                    {{date}}
                </div>
                <div class="ticket__body--entry ticket__body--info-user">
                    <label for="">Χρήστης:</label>
                    {{ticket.user.name}}
                </div>
                <div class="ticket__body--info-customer ticket__body--entry">
                    <label for="customer">Customer:</label>
                    {{ticket.store.customer.name}}
                </div>
                <div class="ticket__body--info-vat ticket__body--entry">
                    <label for="afm">A.F.M.:</label>
                    {{ticket.store.customer.vat_number}}
                </div>
            </div>
            <div>
                <div class="ticket__body--entry ticket__body--entry-priv">
                    <label for="">Περιγραφή:</label>
                    <textarea type="textarea" name="desc" id="desc" disabled :value="ticket.description"></textarea>
                </div>
            </div>
            <div>
                
                <div class="ticket__body--entry ticket__body--entry-priv">
                    <label for="">Επίλυση:</label>
                    <textarea type="textarea" name="desc" id="desc" disabled :value="ticket.solution"></textarea>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import SvgIcon from '../shared/SvgIcon.vue'
export default {
    props: [
        "ticket"
    ],
    data() {
        return {
            collapse: false,
            date : this.ticket.created.split("T")[0]
        }
    },
    computed: {
        timePast() {
            var d1 = new Date(this.date)
            var d2 = new Date()
            var diff = (d2.getTime() - d1.getTime()) / (1000 * 60 * 60 * 24)
            if( diff < 2) {
                return 1
            }
            else if( diff < 4) {
                return 2
            }
            else {
                return 3
            }
        }
    },
    components: {
        SvgIcon
    },
    methods: {
        expand() {
            this.collapse = !this.collapse
        },
        editTicket(payload) {
            this.$store.dispatch("ticket/editTicket", payload)
            this.$router.push('ticketing/edit')
        },
        done(payload) {
            this.$store.dispatch("ticket/deleteTicket", payload)
        }
    }
}
</script>
<style scoped>
    .ticket {
        margin: 0.5rem;
        border: 1px solid #5f5c5c79;
        border-radius: var(--border-radius-1);
    }
    .ticket__header {
        cursor: pointer;
        background: #7a79782c;
        padding: 0.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .ticket_header--title {
        margin-left: 1rem;
        font-size: 1rem;
        font-weight: bold;
        display: flex;
        align-items: center;
    }
    .ticket_header--actions {
        display: grid;
        grid-template-columns: repeat(3,auto);
    }
    .ticket_header--actions-btn {
        cursor: pointer;
        border-radius: 5px;
        margin: 0 0.2rem;
        display: grid;
        justify-content: center;
        align-content: center;
    }
    .edit {
        background: var(--color-warning);
    }
    .danger {
        background: var(--color-danger);
    }
    .success {
        background: var(--color-success);
    }
    .ticket_header--actions-icon {
        height: 1.5rem;
        width: 1.5rem;
        border-radius: 5px;
        padding: 0.2rem;
        fill: white;
    }
    .ticket__body {
        border-top: 1px solid #5f5c5c79;
        background: #7a797810;
        padding: 2rem;
        display: grid;
        grid-template-columns: 20% repeat(2,1fr);
        justify-items: stretch;
    }
    .icon__success {
        fill: var(--color-success);
        margin-left: 0.3rem;
    }
    .icon__danger {
        fill: var(--color-danger);
        margin-left: 0.3rem;
    }
    .icon {
        margin: 0 0.2rem;
        height: 1rem;
        width: 1rem;
    }
    .ticket_header--title-head {
        margin-left: 0.5rem;
    }
    .ticket__body--info {
        display: grid;
    }
    .ticket__body--entry {
        margin: 0.5rem;
        display: grid;
        grid-template-rows: auto 1fr;
        width: 100%;
        justify-self: stretch;
    }
    .ticket__body--entry label {
        grid-row-start: 1;
        font-weight: bold;
        padding-bottom: 0.5rem;
    }
    .ticket__body--entry textarea {
        grid-row-start: 2;
        padding: 0.3rem;
        border: 1px solid rgba(0, 0, 0, 0.267);
        border-radius: 5px;
        width: 35vw;
        height: 15vh;
    }
    .ticket__body--entry-priv {
        display: grid;
        grid-template-columns: repeat(2,auto);
        align-items: center;
        justify-content: left;
    }
@media only screen and (max-width: 768px) {
    .ticket__body {
        border-top: 1px solid #5f5c5c79;
        background: #7a797810;
        padding: 2rem;
        display: grid;
        grid-template-columns: 1fr;
        justify-items: stretch;
    }
    .ticket__body--entry textarea {
        grid-row-start: 2;
        padding: 0.3rem;
        border: 1px solid rgba(0, 0, 0, 0.267);
        border-radius: 5px;
        width: 70vw;
        height: 15vh;
    }
}
</style>