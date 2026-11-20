from fastapi import FastAPI

app = FastAPI(
    title="Infocom Implementation Dashboard",
    description="Backend API for the project management dashboard",
    version="1.0.0"
)


@app.get("/health")
def health_check():
    return {
        "status": "ok"
    }