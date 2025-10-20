import { FormBuilder } from "@/components/form-builder/FormBuilder";

const FormCreator = () => {

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">

        <div className="text-center mb-16 space-y-3">
          <h1 className="text-4xl font-semibold text-foreground tracking-tight">
            AI Form Builder
          </h1>
          <p className="text-base text-muted-foreground max-w-xl mx-auto">
            Create professional research and survey forms in seconds with AI
          </p>
        </div>

        <FormBuilder />
      </div>
    </div>
  );
};

export default FormCreator;