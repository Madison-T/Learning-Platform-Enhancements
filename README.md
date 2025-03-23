# Learning Platform Enhancements

This project improves the interactivity of LMS assessments for Foster Moore's Verne registry software by creating custom SCORM-compliant plugins using eXeLearning.

---

## 🎯 Project Goals

- Enhance learning engagement through interactive assessments
- Replace passive content (e.g. static multiple-choice) with dynamic plugin-based tasks
- Ensure smooth LMS integration with working SCORM 1.2 completion tracking
- Document development and testing for easy use by the client and contributors

---

## 🧩 Plugin Types

Each plugin lives in its own folder under `plugins/`. These include:

- **🧩 Drag and Drop** – Match items to categories or sequences
- **🐞 Find the Error** – Click the incorrect line of code
- **⌨️ Complete the Code** – Fill in the blanks in real syntax
- **⏱️ Timed Sequence** – Complete tasks before a timer runs out
- **💻 Formatted Code Block** – Display clean syntax-highlighted examples

---

## 📁 Folder Structure

```plaintext
plugins/
  └── drag-and-drop/
  └── find-the-error/
  └── complete-the-code/
  └── timed-sequence/
  └── formatted-code-block/

docs/


guides/
  └── SCOFunctions-Fixes.md

.github/
  └── ISSUE_TEMPLATE/
```

---

## 🧪 Testing Your Plugin

1. Apply the SCORM fix:
   See [guides/SCOFunctions-Fixes.md](guides/SCOFunctions-Fixes.md)

2. Open eXeLearning and develop your plugin

3. Export as **SCORM 1.2**

4. Upload and test in [TalentLMS](https://norealcompany.talentlms.com)

---

## 👥 Contributing

Please read the [CONTRIBUTING.md](CONTRIBUTING.md) for how to:

- Follow folder structure
- Use branches properly
- Test SCORM compatibility
- Submit a plugin or fix

---

## 🔐 License

MIT License — see the `LICENSE` file

---

## 🙌 Acknowledgements

- **Client**: Andy Connor, Foster Moore
- **Mentor**: Cheryll Singh, AUT
- **Moderator**: Jim Buchchan, AUT
- **Team**: Madison Tana, Joel Hillmann, Shubham Paudel, Mason Scanlan

Developed as part of AUT’s final-year R&D project.
