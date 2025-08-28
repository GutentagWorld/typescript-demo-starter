class App {
    private nameInput: HTMLInputElement;
    private greetButton: HTMLButtonElement;
    private output: HTMLElement;

    constructor() {
        this.nameInput = document.getElementById('nameInput') as HTMLInputElement;
        this.greetButton = document.getElementById('greetButton') as HTMLButtonElement;
        this.output = document.getElementById('output') as HTMLElement;
        
        this.init();
    }

    private init(): void {
        this.greetButton.addEventListener('click', () => this.handleGreet());
        this.nameInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.handleGreet();
            }
        });
    }

    private handleGreet(): void {
        const name = this.nameInput.value.trim();
        if (name) {
            this.output.textContent = `Hello ${name}!`;
        } else {
            this.output.textContent = 'Please enter your name.';
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new App();
});