import { Plus } from "lucide-react"

const ExperienceForm = ({ data, onChange }) => {

    const addExperience = () => {
        const newExperience = {
            company: "",
            position: "",
            start_date: "",
            end_date: "",
            description: "",
            is_current: false
        };
        onChange([...data, newExperience])
    }

    const removeExperience = (index) => {
        const updated = data.filter((_, i) => i !== index);
        onChange(updated)
    }

    const updateExperience = (index, field, value) => {
        const updated = [...data];
        updated[index] = {...updated[index], [field]}
        onChange(updated)
    }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900">
            Professional Experience
          </h3>
          <p className="text-sm text-gray-500">
            Add your job experience
          </p>
        </div>
        <button className="flex items-center gap-2 px-3 py-1 text-sm bg-purple-100 text-purple-700 rounded
        hover:bg-purple-200 transition-colors">
          <Plus className="size-4" />
          Add Experience
        </button>
      </div>
    </div>
  )
}

export default ExperienceForm
