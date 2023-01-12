const InputNote: React.FC = () => {
  return (
    <div className="pb-8 grid gap-2 md:grid-cols-7 md:gap-6">
      <div className="md:col-span-3">
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700"
        >
          Title
        </label>
        <div className="relative mt-1 rounded-md shadow-sm">
          <input
            type="text"
            name="title"
            id="title"
            className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-red-500 focus:ring-red-500 sm:text-sm"
            placeholder="New title..."
          />
        </div>
      </div>

      <div className="md:col-span-3">
        <label
          htmlFor="desc"
          className="block text-sm font-medium text-gray-700"
        >
          Description
        </label>
        <div className="relative mt-1 rounded-md shadow-sm">
          <input
            type="text"
            name="desc"
            id="desc"
            className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-red-500 focus:ring-red-500 sm:text-sm"
            placeholder="New description..."
          />
        </div>
      </div>

      <button className="h-12 self-end text-sm font-semibold lg:text-base text-white bg-red-500 text-center border border-solid border-red-400 rounded hover:border-red-500 hover:bg-white hover:text-red-500 transition-colors duration-300 mt-1 md:mt-0 md:ml-1">
        NEW NOTE
      </button>
    </div>
  );
};

export default InputNote;
