import commands, subprocess
import sublime, sublime_plugin
import json

settings = sublime.load_settings("Beautify.sublime-settings")

class BeautifyCommand(sublime_plugin.TextCommand):
    def run(self, edit):
        self.save()
        self.beautify(edit)

    def save(self):
        self.view.run_command("save")

    def beautify(self, edit):
        scriptPath = sublime.packages_path() + "/Sublime-Beautify/scripts/run.js"
        s = {
            "js": settings.get("js"),
            "html": settings.get("html"),
            "css": settings.get("css")
        }
        cmd = [settings.get("node"), scriptPath, self.view.file_name(), json.dumps(s).replace('"', '\\"')]

        if sublime.platform() == "windows":
            p = subprocess.Popen(cmd, shell=True, stdout=subprocess.PIPE)
            html = p.communicate()[0]
        else:
            html = commands.getoutput('"' + '" "'.join(cmd) + '"')

        if len(html) > 0:
            self.view.replace(edit, sublime.Region(0, self.view.size()), html.decode("utf-8"))
            sublime.set_timeout(self.save, 100)
