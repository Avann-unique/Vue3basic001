// Création de l'application Vue avec l'API Options
const app = Vue.createApp({
    // data() doit être une fonction qui retourne un objet réactif
    data() {
        return {
            isVisible: true   // propriété contrôlant la visibilité
        }
    },
    // Les méthodes sont accessibles dans le template via v-on:click, etc.
    methods: {
        // Méthode déclenchée par le clic sur le bouton
        toggleVisibility() {
            // this permet d'accéder aux propriétés de data()
            this.isVisible = !this.isVisible;
            // Bascule entre true et false → déclenche la réactivité de Vue
        }
    }
});

// Montage de l'application sur la balise dont l'id est "vueapp"
app.mount('#vueapp');
