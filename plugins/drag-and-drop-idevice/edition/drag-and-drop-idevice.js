var $exeDevice = {
    init: function() {
        // Updated HTML to include a field for inputting the question with draggable answer
        var html = '\
            <div id="myExampleForm">\
                <div class="exe-idevice-info">' + _("Instructions: Enter the question with the answer surrounded by asterisks.") + '</div>\
                \
                    <p>\
                        <label for="questionInput">Question:</label>\
                        <input type="text" id="questionInput" placeholder="The capital of New Zealand is *Wellington*">\
                    </p>\
                    <button type="button" id="generateDragDrop">Generate Drag and Drop</button>\
                    <div id="dragDropArea"></div>\
                </div>\
            </div>\
        ';

        var field = $("#activeIdevice textarea.jsContentEditor");
        field.before(html);
        $exeAuthoring.iDevice.tabs.init("myExampleForm");

        // Button to process the input and create drag and drop setup
        $("#generateDragDrop").on("click", function() {
            var inputText = $("#questionInput").val();
            $exeDevice.processInput(inputText);
        });

        this.getPreviousValues(field);
    },

    processInput: function(inputText) {
        var parts = inputText.split("*");
        if (parts.length === 3) {
            var questionPart1 = parts[0];
            var answer = parts[1];
            var questionPart2 = parts[2];

            var dragDropHtml = questionPart1 +
                '<div class="drop-zone">[Drop answer here]</div>' +
                questionPart2 +
                '<div class="draggable" draggable="true" id="draggableAnswer">' + answer + '</div>';

            $("#dragDropArea").html(dragDropHtml);

            // Initialize draggable and droppable functionality
            this.setupDragAndDrop();
        } else {
            alert("Please format the question with the answer surrounded by asterisks.");
        }
    },

    setupDragAndDrop: function() {
        $(".draggable").on("dragstart", function(e) {
            e.originalEvent.dataTransfer.setData("text/plain", e.target.id);
        });

        $(".drop-zone").on("dragover", function(e) {
            e.preventDefault();
        }).on("drop", function(e) {
            e.preventDefault();
            var data = e.originalEvent.dataTransfer.getData("text");
            var draggableElement = document.getElementById(data);
            e.target.innerHTML = ''; // Clear the drop zone before appending
            e.target.appendChild(draggableElement);
        });
    },

    save: function() {
        var res = $("#dragDropArea").html(); // Save the current state of the drag and drop area
        return res;
    },

    getPreviousValues: function(field) {
        var content = field.val();
        if (content != '') {
            $("#dragDropArea").html(content);
            this.setupDragAndDrop(); // Reinitialize drag and drop functionality after loading saved values
        }
    }
}
