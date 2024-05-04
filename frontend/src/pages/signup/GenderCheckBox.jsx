const GenderCheckBox = () => {
    return (
        <div className="flex">
            <div className="form-control">
                <label className="cursor-pointer label gap-2">
                    <span className="label-text">Male</span>
                    <input type="radio" name="radio-4" className="radio radio-accent radio-sm" checked />
                </label>
            </div>

            <div className="form-control">
                <label className="cursor-pointer label gap-2">
                    <span className="label-text">Female</span>
                    <input type="radio" name="radio-4" className="radio radio-accent radio-sm" />
                </label>
            </div>
        </div>
    )
}

export default GenderCheckBox
