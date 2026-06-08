from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

try:
    from .rag import ask
except ImportError:
    from rag import ask

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
    ],
    allow_credentials=True,
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)


class AskRequest(BaseModel):
    query: str


class AskResponse(BaseModel):
    answer: str


@app.get("/health")
def health():
    return {"status": "ok"}


@app.get("/")
def invoke(query: str):
    return {"answer": ask(query)}


@app.post("/ask", response_model=AskResponse)
def ask_question(payload: AskRequest):
    query = payload.query.strip()

    if not query:
        raise HTTPException(status_code=400, detail="La question est vide.")

    return AskResponse(answer=ask(query))
