$(document).ready(function () {
   const stepImage = {
      "step-1":
         "https://cdn.sanity.io/images/bj34pdbp/migration/26280dc59e937e0e8bd76b65dee1e818ad9aae2b-1760x1350.png?w=1200&q=80&fit=clip&auto=format",
      "step-2":
         "https://cdn.sanity.io/images/bj34pdbp/migration/6ccb843f45024c2fc9ee955c5b3ed49e0958666a-1760x1350.png?w=1920&q=80&fit=clip&auto=format",
      "step-3":
         "https://cdn.sanity.io/images/bj34pdbp/migration/2e1aa4aed5d3e36c9249e623759812d10c53f02c-1760x1350.png?w=1920&q=80&fit=clip&auto=format",
      "step-4":
         "https://cdn.sanity.io/images/bj34pdbp/migration/4aa92fcf5a2e1f568290451b88c873b885d8372f-1760x1350.png?w=1920&q=80&fit=clip&auto=format",
   };

   $(".step-title").click(function () {
      $(".step-marker").removeClass("marker-active");

      $(".step-subtitle").hide();

      $(this).find(".step-marker").addClass("marker-active");

      $(this).siblings(".step-subtitle").show();

      const stepId = $(this).closest(".step-text-accordion").attr("id");

      $("#img-step").fadeOut(50, function () {
         $("#img-step").attr("src", stepImage[stepId]);

         $("#img-step").fadeIn(300);
      });
   });
});
