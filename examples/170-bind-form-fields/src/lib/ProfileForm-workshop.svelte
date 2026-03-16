<!--Example of a 'profile form', using all kinds of form fields and data binding-->
<script lang="ts">
    // 0. State variables
    let firstName: string = $state('');
    let lastName: string = $state('');
    let available: boolean = $state(false);
    let level: 'junior' | 'medior' | 'senior' = $state('medior');
    let skills: string[] = $state([]);
    let bio: string = $state('');

    // 1. A computed variable to combine first and last name
    const name = $derived(`${firstName} ${lastName}`.trim());

    // 2. Submit the form data to the server
    function onSubmit() {
        const formData = {
            firstName,
            lastName,
            available,
            level,
            skills,
            bio
        };
        // alert ('Form submitted!' + JSON.stringify(formData));
        console.log('Form submitted:', formData);
    }

    // 3. Reset the form
    function onReset() {
        firstName = '';
        lastName = '';
        available = false;
        level = 'medior';
        skills = [];
        bio = '';
    }
</script>

<!--UI for this component-->
<div class="container">
    <!--First column - the form: Simple HTML and some CSS -->
    <div class="form-column">
        <div>
            <label for="firstname">First name</label>
            <input id="firstname" type="text" bind:value={firstName}/>
        </div>


        <div>
            <label for="lastname">Last name</label>
            <input id="lastname" type="text" bind:value={lastName}/>
        </div>

        <div>
            <label>
                <input type="checkbox" bind:checked={available}/>
                Available for freelance work?
            </label>
        </div>

        <div>
            <h3>Experience level</h3>

            <label>
                <input type="radio" bind:group={level} value="junior"/>
                Junior
            </label>

            <label>
                <input type="radio" bind:group={level} value="medior"/>
                Medior
            </label>

            <label>
                <input type="radio" bind:group={level} value="senior"/>
                Senior
            </label>
        </div>

        <div>
            <h3>Skills</h3>

            <label>
                <input type="checkbox" bind:group={skills} value="HTML"/>
                HTML
            </label>

            <label>
                <input type="checkbox" bind:group={skills} value="CSS"/>
                CSS
            </label>

            <label>
                <input type="checkbox" bind:group={skills} value="JavaScript"/>
                JavaScript
            </label>

            <label>
                <input type="checkbox" bind:group={skills} value="TypeScript"/>
                TypeScript
            </label>

            <label>
                <input type="checkbox" bind:group={skills} value="Svelte"/>
                Svelte
            </label>
        </div>

        <div>
            <label for="bio"><h3>Bio</h3></label>
            <textarea id="bio" rows="5" bind:value={bio}></textarea>
        </div>
    </div>

    <!--Second column: summary-->
    <div class="preview-column">
        <h3>Live profile preview</h3>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Available:</strong> {available}</p>
        <p><strong>Level:</strong> {level}</p>
        <p><strong>Skills:</strong> {skills.join(', ') || 'None selected'}</p>
        <p><strong>Bio:</strong></p>
        <pre>{bio}</pre>
    </div>
</div> <!--/Container-->

<!--Buttons-->
<div class="button-container">
    <button type="button" class="submit-btn" onclick={onSubmit}>Submit</button>
    <button type="button" class="reset-btn" onclick={onReset}>Reset</button>
</div>

<!--Some sample CSS-styles for this form component-->
<style>
    .container {
        display: flex;
        gap: 30px;
        align-items: flex-start;
    }

    .form-column {
        flex: 1;
        min-width: 0;
    }

    .preview-column {
        flex: 1;
        min-width: 0;
        padding: 15px;
        border: 1px solid #ddd;
        background-color: #f5f5f5;
    }

    .button-container {
        display: flex;
        gap: 10px;
        margin-top: 20px;
    }

    .submit-btn, .reset-btn {
        padding: 10px 20px;
        font-size: 16px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.3s;
    }

    .submit-btn {
        background-color: #4CAF50;
        color: white;
    }

    .submit-btn:hover {
        background-color: #45a049;
    }

    .reset-btn {
        background-color: #f44336;
        color: white;
    }

    .reset-btn:hover {
        background-color: #da190b;
    }
</style>
