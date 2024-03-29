import React from "react";
import proposalMockData from "../../../mock/proposal-data";
import { SiGithub, SiX } from "@icons-pack/react-simple-icons";
import { LinkIcon } from "@heroicons/react/24/outline";

// import Image from "next/image";

const ProposalDetailsPage = ({ params }: { params: { id: number } }) => {
  return (
    <div className="flex flex-col space-y-10">
      <div className="flex justify-between items-center">
        <div>
          <div className="badge badge-success">{proposalMockData[params.id].status}</div>
          <h1 className="text-2xl">{proposalMockData[params.id].name}</h1>
          <p className="text-gray-500">
            Proposed by{" "}
            <span className="link border-l-pink-50">
              {proposalMockData[params.id].owner.slice(0, 6) + "..." + proposalMockData[params.id].owner.slice(-4)}
            </span>{" "}
            on {new Date(proposalMockData[params.id].created).toISOString().substring(0, 10)}
          </p>
          <p>Raising: {proposalMockData[params.id].raising} DAI</p>
        </div>
        <button className="btn btn-primary">Submit Vote</button>
      </div>

      <div className="grid grid-cols-3">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="flex flex-row items-center justify-between">
              <h2 className="card-title text-success w-full">For</h2>
              <p className="card-title">{proposalMockData[params.id].votes.for}</p>
            </div>
            <progress className="progress progress-success w-full" value="60" max="100"></progress>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="flex flex-row items-center justify-between">
              <h2 className="card-title text-error w-full">Against</h2>
              <p className="card-title">{proposalMockData[params.id].votes.against}</p>
            </div>
            <progress className="progress progress-error w-full" value="30" max="100"></progress>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="flex flex-row items-center justify-between">
              <h2 className="card-title w-full">Abstain</h2>
              <p className="card-title">{proposalMockData[params.id].votes.abstain}</p>
            </div>
            <progress className="progress w-full" value="10" max="100"></progress>
          </div>
        </div>
      </div>

      <div role="tablist" className="tabs tabs-bordered">
        <input type="radio" name="my_tabs_1" role="tab" className="tab text-lg" aria-label="About" defaultChecked />
        <div role="tabpanel" className="tab-content p-10">
          <div className="grid grid-cols-3 gap-4">
            <div className="flex items-center space-x-2">
              <LinkIcon className="h-6 w-6" />
              <p>{proposalMockData[params.id].socials.website}</p>
            </div>
            <div className="flex items-center space-x-2">
              <SiX size={24} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />
              <p>{proposalMockData[params.id].socials.twitter}</p>
            </div>
            <div className="flex items-center space-x-2">
              <SiGithub size={24} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />
              <p>{proposalMockData[params.id].socials.github}</p>
            </div>
          </div>
          <div dangerouslySetInnerHTML={{ __html: proposalMockData[params.id].description }} />
        </div>

        <input type="radio" name="my_tabs_1" role="tab" className="tab text-lg" aria-label="Stats" />
        <div role="tabpanel" className="tab-content p-10">
          Tab content 2
        </div>

        <input type="radio" name="my_tabs_1" role="tab" className="tab text-lg" aria-label="Rounds" />
        <div role="tabpanel" className="tab-content p-10">
          Tab content 3
        </div>
      </div>
    </div>
  );
};

export default ProposalDetailsPage;