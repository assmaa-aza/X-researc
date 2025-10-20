import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function PublicForm() {
  const { formId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Mock form structure - in a real app, this would be fetched based on formId
  const mockFormFields = [
    { id: "name", type: "text", label: "Name", required: true },
    { id: "email", type: "email", label: "Email", required: true },
    { id: "message", type: "textarea", label: "Message", required: false },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      navigate(`/form/${formId}/thank-you`);
    }, 1000);
  };

  const handleInputChange = (fieldId: string, value: string) => {
    setFormData((prev) => ({ ...prev, [fieldId]: value }));
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle>My Form 1</CardTitle>
          <CardDescription>Please fill out all required fields</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {mockFormFields.map((field) => (
              <div key={field.id} className="space-y-2">
                <Label htmlFor={field.id}>
                  {field.label}
                  {field.required && <span className="text-destructive ml-1">*</span>}
                </Label>
                {field.type === "textarea" ? (
                  <Textarea
                    id={field.id}
                    required={field.required}
                    value={formData[field.id] || ""}
                    onChange={(e) => handleInputChange(field.id, e.target.value)}
                    placeholder={`Enter your ${field.label.toLowerCase()}`}
                  />
                ) : (
                  <Input
                    id={field.id}
                    type={field.type}
                    required={field.required}
                    value={formData[field.id] || ""}
                    onChange={(e) => handleInputChange(field.id, e.target.value)}
                    placeholder={`Enter your ${field.label.toLowerCase()}`}
                  />
                )}
              </div>
            ))}
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
