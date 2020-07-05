/**
 * A specialized form used to create and edit contextual notes
 * 
 * @type {FormApplication}
 */
export class NotesSFRPG extends FormApplication {
    static get defaultOptions() {
        const options = super.defaultOptions;

        options.id = "notes-dialog";
        options.classes = ["sfrpg"];
        options.title = "Notes";
        options.template = "systems/sfrpg/templates/apps/notes.html";
        options.width = 300;
        options.height = 260;

        return options;
    }

    /**
     * Get the summary data key
     * 
     * @type {String}
     */
    get summary() {
        return this.options.summary;
    }

    /**
     * Get the notes data key
     * 
     * @type {String}
     */
    get notes() 
    {
        return this.options.notes;
    }

    /**
     * Provide data to the HTML template for rendering
     * 
     * @returns {Object}
     */
    getData() 
    {
        let summaryProp = getProperty(this.object.data, this.summary);
        let notesProp   = getProperty(this.object.data, this.notes);
        
        return {
            summary: summaryProp,
              notes: notesProp
        };
    }

    /**
     * Update the Actor object with new data from the form
     * 
     * @param {Event} event The event that triggers the update
     * @param {Object} formData The data from the form
     * @private
     */
    _updateObject(event, formData) 
    {
        console.log(`_updateObject\r\n    formData.summary: ${formData.summary}\r\n    formData.name: ${formData.notes}`);

        this.object.update({
            [this.summary]: formData.summary,
            [this.notes]: formData.notes
        });
    }
}