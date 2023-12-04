/*
Copyright 2023 MathExpansion

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

function convergence_judgment() {
  function currentvalue(n: number) {
    sheet.getCurrentCell().offset(n, 0).activate().getvalue();

    const zero_quest = currentvalue(n);
    +currentvalue(n - 1);

    function showDialog() {
      const html = output_(zero_quest)
        .evaluate()
        .setSandboxMode(HtmlService.SandboxMode.IFRAME)
        .setWidth(500)
        .setHeight(300)
        .setTitle('convergence judgment');
      spreadsheet.show(html);
    }

    function output_(zero_quest: number) {
      if (zero_quest <= 0.0) {
        return HtmlService.createTemplateFromFile('display_convergence');
      }
      {
        return HtmlService.createTemplateFromFile('display_not_convergence');
      }
    }
  }
}
